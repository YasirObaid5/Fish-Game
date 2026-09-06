"""Original A'maq reef sculptures. Run with Blender 5.1 --background --python.

The file creates a compact, vertex-coloured GLB kit rather than baking an image
onto billboards. All shapes, colours and topology are authored here, with a
repeatable seed. Blender is a production tool only; the game needs no Blender.
"""
import bpy
import math
import random
import sys
from pathlib import Path
from mathutils import Vector

OUT = Path(__file__).resolve().parents[1] / "assets" / "models"
OUT.mkdir(parents=True, exist_ok=True)
rng = random.Random(260906)
bpy.ops.object.select_all(action='SELECT')
bpy.ops.object.delete(use_global=False)


def mix(a, b, t):
    return tuple(a[i] * (1 - t) + b[i] * t for i in range(3))


def material(name):
    mat = bpy.data.materials.new(name)
    mat.diffuse_color = (.7, .45, .2, 1)
    mat.use_nodes = True
    p = mat.node_tree.nodes.get('Principled BSDF')
    p.inputs['Roughness'].default_value = .72
    p.inputs['Specular IOR Level'].default_value = .27
    p.inputs['Subsurface Weight'].default_value = .025
    c = mat.node_tree.nodes.new('ShaderNodeVertexColor')
    c.layer_name = 'ReefPigment'
    mat.node_tree.links.new(c.outputs['Color'], p.inputs['Base Color'])
    return mat


REEF_MATERIAL = material('Mineralised coral · original vertex pigment')


class Sculpture:
    def __init__(self, name):
        self.name = name
        self.vertices, self.faces, self.colours = [], [], []

    def vertex(self, p, colour):
        self.vertices.append(tuple(p))
        self.colours.append((*colour[:3], 1))
        return len(self.vertices) - 1

    def tube(self, points, radii, base, tip, sides=8, cap=True, corrugation=.06):
        """Parallel-transport frames prevent the obvious banding of stacked cones."""
        points = [Vector(p) for p in points]
        rings = []
        old_n = None
        for k, (p, radius) in enumerate(zip(points, radii)):
            tangent = (points[min(k+1, len(points)-1)] - points[max(k-1, 0)]).normalized()
            if old_n is None:
                n = tangent.cross(Vector((0, 1, .12))).normalized()
                if n.length < .1:
                    n = tangent.cross(Vector((1, 0, 0))).normalized()
            else:
                n = (old_n - tangent * old_n.dot(tangent)).normalized()
            b = tangent.cross(n).normalized()
            old_n = n
            colour = mix(base, tip, (k / max(1, len(points)-1)) ** 2)
            ring = []
            for j in range(sides):
                a = j / sides * math.tau
                ripple = 1 + corrugation * math.sin(j * 2.61 + k * 2.8)
                q = p + (n * math.cos(a) + b * math.sin(a)) * radius * ripple
                grain = .93 + .10 * math.sin(q.x * 31 + q.z * 19 + q.y * 23)
                ring.append(self.vertex(q, tuple(v * grain for v in colour)))
            rings.append(ring)
        for a, b in zip(rings, rings[1:]):
            for j in range(sides):
                self.faces.append((a[j], a[(j+1) % sides], b[(j+1) % sides], b[j]))
        if cap:
            self.faces.append(tuple(reversed(rings[0])))
            self.faces.append(tuple(rings[-1]))

    def object(self):
        mesh = bpy.data.meshes.new(self.name + ' · organic mesh')
        mesh.from_pydata(self.vertices, [], self.faces)
        mesh.update()
        colours = mesh.color_attributes.new(name='ReefPigment', type='FLOAT_COLOR', domain='POINT')
        for c, value in zip(colours.data, self.colours):
            c.color = value
        obj = bpy.data.objects.new(self.name, mesh)
        bpy.context.collection.objects.link(obj)
        mesh.materials.append(REEF_MATERIAL)
        for poly in mesh.polygons:
            poly.use_smooth = True
        return obj


def branch(sc, origin, direction, length, radius, depth, palette):
    origin, direction = Vector(origin), Vector(direction).normalized()
    bend = Vector((rng.uniform(-.22, .22), rng.uniform(-.20, .20), rng.uniform(.04, .22)))
    count = max(5, int(length * 6))
    pts, widths = [], []
    for i in range(count):
        t = i / (count - 1)
        pts.append(origin + direction * (length * t) + bend * (length * t * t))
        widths.append(radius * (1 - .48 * t) * (.96 + .045 * math.sin(i * 1.9)))
    sc.tube(pts, widths, palette[0], palette[1], sides=8 if radius > .065 else 6)
    if depth:
        for j, t in enumerate((.47, .72, .94)):
            idx = min(count-1, int(t*(count-1)))
            phi = rng.uniform(0, math.tau)
            spread = Vector((math.cos(phi)*.64, math.sin(phi)*.64, .35))
            newdir = (direction * .57 + spread).normalized()
            branch(sc, pts[idx], newdir, length*rng.uniform(.40,.61), radius*.60, depth-1, palette)


antler = Sculpture('coral_antler')
for i in range(6):
    a = i/6*math.tau + .17
    branch(antler, (math.cos(a)*.26, math.sin(a)*.24, 0),
           (math.cos(a)*.38, math.sin(a)*.38, 1), rng.uniform(2.6,3.5), .20, 3,
           ((.30,.12,.052),(.83,.52,.23)))
ANTLER = antler.object()


fan = Sculpture('coral_fan')
fan.tube([(0,0,0),(.05,.01,.45),(-.03,.06,.95),(0,.1,1.40)], [.19,.14,.11,.08],
         (.24,.085,.028),(.65,.28,.085), 10)
N, LEVELS = 43, 20
fan_points = {}
for j in range(N):
    angle = -1.22 + j/(N-1)*2.44
    radial_extent = 4.05 + .20*math.sin(j*1.81) + .12*math.sin(j*.8)
    pts, radii = [], []
    for k in range(LEVELS):
        t = k/(LEVELS-1)
        r = .12 + t*radial_extent
        x = math.sin(angle)*r + .07*math.sin(k*1.7+j*.8)*t
        z = 1.07 + math.cos(angle)*r + .04*math.sin(k+j*2)
        y = .10 + .26*math.sin(x*.8) + .13*math.sin(z*1.4+x) + .05*math.sin(j*2+k)
        p = (x,y,z)
        fan_points[(j,k)] = p
        pts.append(p)
        radii.append(.012 + .037*(1-t)**1.15)
    fan.tube(pts,radii,(.52,.12,.046),(.88,.33,.15),5,corrugation=.15)
for j in range(N-1):
    for k in range(2,LEVELS):
        if rng.random()<.17:
            continue
        start = Vector(fan_points[(j,k)])
        end = Vector(fan_points[(j+1,k if (j+k)%3 else max(1,k-1))])
        mid = (start+end)/2 + Vector((0,.035*math.sin(j*1.7),.045*math.sin(k*1.6+j)))
        rad = .012 + .008*(1-k/LEVELS)
        fan.tube([start,mid,end],[rad,rad*.77,rad],(.65,.19,.058),(.84,.31,.10),4)
FAN = fan.object()


table = Sculpture('coral_table')
table.tube([(0,0,0),(.10,0,.45),(-.13,.1,1.0),(.08,.04,1.7),(.28,.12,2.5)],
           [.42,.37,.29,.19,.12],(.25,.11,.085),(.55,.28,.22),12)
for tier in range(4):
    offset = Vector(([-.18,.36,-.46,.28][tier], [0,.08,-.12,.08][tier], .48+tier*.60))
    radius = [2.5,2.10,1.65,1.05][tier]
    ANGLES, RINGS = 88, 10
    top, bottom = [], []
    for layer in (0,1):
        target = top if layer==0 else bottom
        for r in range(RINGS+1):
            t = r/RINGS
            ring=[]
            for j in range(ANGLES):
                a = j/ANGLES*math.tau
                outline = 1+.105*math.sin(a*5.0+tier)+.051*math.sin(a*11.0-.6)+.022*math.sin(a*23)
                rr = max(.001,t*radius*outline)
                edge_folds = .13*math.sin(a*6+tier)*t**3 + .04*math.sin(a*17)*t**2
                radial_ribs = .025*math.cos(a*44 + .65*math.sin(t*8))*t
                z = .12*t*t + edge_folds + radial_ribs - (.13*(1-t)+.025 if layer else 0)
                pos = offset + Vector((rr*math.cos(a),rr*math.sin(a),z))
                if layer==0:
                    pigment=mix((.37,.10,.16),(.88,.57,.47), t**3)
                    pigment=mix(pigment,(.65,.32,.31), .18+.08*math.sin(rr*37+a*6))
                else:
                    pigment=(.28,.145,.10)
                ring.append(table.vertex(pos,pigment))
            target.append(ring)
    for layer,rings in enumerate((top,bottom)):
        for r in range(RINGS):
            for j in range(ANGLES):
                face=(rings[r][j],rings[r][(j+1)%ANGLES],rings[r+1][(j+1)%ANGLES],rings[r+1][j])
                table.faces.append(face if layer else tuple(reversed(face)))
    for j in range(ANGLES):
        table.faces.append((top[-1][j],bottom[-1][j],bottom[-1][(j+1)%ANGLES],top[-1][(j+1)%ANGLES]))
TABLE = table.object()


sponge = Sculpture('sponge_cluster')
for tube_index,(cx,cy,height,width) in enumerate([(-.6,-.25,3.45,.42),(.15,.1,4.05,.54),(.90,-.05,2.75,.41),(-.8,.5,2.05,.37),(.60,.74,3.20,.45)]):
    RINGS, SIDES = 19, 40
    layers=[]
    for inner in (False,True):
        rings=[]
        for k in range(RINGS):
            t=k/(RINGS-1)
            ring=[]
            centre=Vector((cx+.15*math.sin(t*1.8+tube_index)*t,cy+.10*t*t,height*t))
            profile=width*(.67+.32*math.sin(t*math.pi*.65)+.10*math.sin(t*8))
            profile-=.065 if inner else 0
            for j in range(SIDES):
                a=j/SIDES*math.tau
                radial=profile*(1+.050*math.sin(a*10+t*2.1)+.022*math.sin(a*19-t*4))
                lip=.075*math.sin(a*4+tube_index)*t**10+.025*math.sin(a*11)*t**6
                pos=centre+Vector((math.cos(a)*radial,math.sin(a)*radial,lip))
                pigment=mix((.29,.15,.034),(.82,.49,.15),.38+.54*t)
                grain=.92+.09*math.sin(a*17+t*71)+.06*math.sin(a*29-t*115)
                pigment=tuple(c*grain*(.48+.52*t**5 if inner else 1) for c in pigment)
                ring.append(sponge.vertex(pos,pigment))
            rings.append(ring)
        layers.append(rings)
    for inner,rings in enumerate(layers):
        for k in range(RINGS-1):
            for j in range(SIDES):
                face=(rings[k][j],rings[k][(j+1)%SIDES],rings[k+1][(j+1)%SIDES],rings[k+1][j])
                sponge.faces.append(tuple(reversed(face)) if inner else face)
    for j in range(SIDES):
        sponge.faces.append((layers[0][-1][j],layers[0][-1][(j+1)%SIDES],layers[1][-1][(j+1)%SIDES],layers[1][-1][j]))
SPONGE=sponge.object()


assets=[ANTLER,FAN,TABLE,SPONGE]
for obj in assets:
    obj['original_art']='Amaaq reef kit · deterministic Blender sculpture'
    obj['permeable']=True
    obj.select_set(True)
bpy.context.view_layer.objects.active=ANTLER
export_path=OUT/'reef-kit.glb'
bpy.ops.export_scene.gltf(filepath=str(export_path),export_format='GLB',use_selection=True,
    export_apply=True,export_yup=True,export_normals=True,export_materials='EXPORT',
    export_attributes=False,export_extras=True)
stats=[]
for obj in assets:
    obj.data.calc_loop_triangles()
    stats.append({'name':obj.name,'triangles':len(obj.data.loop_triangles),'vertices':len(obj.data.vertices),'dimensions':list(obj.dimensions)})
print('REEF_ASSET_REPORT',stats,'bytes',export_path.stat().st_size)
if '--export-only' in sys.argv:
    sys.exit(0)

# A physically-lit contact sheet is a production check, never a game backdrop.
for i,obj in enumerate(assets):
    obj.location.x=(i-1.5)*6.8
    obj.rotation_euler.z=[-.4,0,.5,-.2][i]
world=bpy.context.scene.world or bpy.data.worlds.new('Underwater studio')
bpy.context.scene.world=world
world.use_nodes=True
world.node_tree.nodes['Background'].inputs['Color'].default_value=(.065,.16,.20,1)
world.node_tree.nodes['Background'].inputs['Strength'].default_value=.55
bpy.ops.mesh.primitive_plane_add(size=100,location=(0,0,-.14))
ground=bpy.context.object
gm=bpy.data.materials.new('Neutral reef slate')
gm.diffuse_color=(.16,.24,.25,1)
ground.data.materials.append(gm)
for loc,power,size,colour in [((1,-8,16),2500,12,(.87,.94,1)),((-12,4,9),1700,10,(.38,.72,1)),((12,5,12),2200,8,(1,.75,.40))]:
    bpy.ops.object.light_add(type='AREA',location=loc)
    light=bpy.context.object
    light.data.energy=power
    light.data.shape='DISK'
    light.data.size=size
    light.data.color=colour
    light.rotation_euler=(Vector((0,0,1))-light.location).to_track_quat('-Z','Y').to_euler()
bpy.ops.object.camera_add(location=(12,-29,12))
cam=bpy.context.object
cam.rotation_euler=(Vector((0,0,2.0))-cam.location).to_track_quat('-Z','Y').to_euler()
cam.data.type='ORTHO'
cam.data.ortho_scale=29
bpy.context.scene.camera=cam
scene=bpy.context.scene
scene.render.engine='CYCLES'
scene.cycles.samples=32
scene.cycles.use_denoising=True
scene.render.resolution_x=1800
scene.render.resolution_y=780
scene.render.resolution_percentage=100
scene.render.image_settings.file_format='PNG'
scene.render.filepath=str(OUT/'reef-kit-preview.png')
scene.view_settings.view_transform='AgX'
bpy.ops.render.render(write_still=True)

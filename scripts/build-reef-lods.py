"""Derive authored reef LODs from the original GLB; run with Blender --background --python."""
import bpy
from pathlib import Path

root = Path(__file__).resolve().parents[1]
for name, ratio in [('mid', .28), ('far', .075)]:
    bpy.ops.object.select_all(action='SELECT')
    bpy.ops.object.delete(use_global=False)
    bpy.ops.import_scene.gltf(filepath=str(root / 'assets/models/reef-kit.glb'))
    stats = []
    for obj in list(bpy.context.scene.objects):
        if obj.type != 'MESH':
            continue
        bpy.context.view_layer.objects.active = obj
        modifier = obj.modifiers.new('Distance detail', 'DECIMATE')
        modifier.ratio = ratio
        modifier.use_collapse_triangulate = True
        bpy.ops.object.modifier_apply(modifier=modifier.name)
        obj.data.calc_loop_triangles()
        stats.append((obj.name, len(obj.data.loop_triangles)))
    output = root / ('assets/models/reef-kit-' + name + '.glb')
    bpy.ops.export_scene.gltf(filepath=str(output), export_format='GLB', export_yup=True,
                             export_materials='EXPORT', export_normals=True)
    print('REEF_LOD', name, output.stat().st_size, stats)

var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},t={},n=e.parcelRequire5b70;null==n&&((n=function(e){if(e in a)return a[e].exports;if(e in t){var n=t[e];delete t[e];var r={id:e,exports:{}};return a[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,a){t[e]=a},e.parcelRequire5b70=n);var r=n("ilwiq"),i=n("RPVlj"),o=n("7lx9d"),s=n("5Rd1x"),l=n("4CEV9"),m=n("891vQ"),d=n("kp7Te"),c=n("jiuw3");let u,h,g,p,w,v,C,y;const f={material1:{color:"#ffc766",emissive:"#000000",emissiveIntensity:1,roughness:.1,metalness:.8,ior:1.495,transmission:0,opacity:1},material2:{color:"#db7157",emissive:"#000000",emissiveIntensity:1,roughness:.8,metalness:.1,transmission:0,ior:1.495,opacity:1},material3:{color:"#000000",roughness:.01,metalness:.05},stableNoise:!1,environmentIntensity:3,environmentRotation:0,bounces:5,samplesPerFrame:1,acesToneMapping:!0,resolutionScale:1/window.devicePixelRatio,transparentTraversals:20,filterGlossyFactor:.5,tiles:1};window.location.hash.includes("transmission")&&(f.material1.metalness=0,f.material1.roughness=.05,f.material1.transmission=1,f.material1.color="#ffffff",f.bounces=10);function b(){const e=window.innerWidth,a=window.innerHeight,t=f.resolutionScale,n=window.devicePixelRatio;p.target.setSize(e*t*n,a*t*n),p.reset(),u.setSize(e,a),u.setPixelRatio(window.devicePixelRatio*t),w.aspect=e/a,w.updateProjectionMatrix()}function M(){p.reset()}function T(){requestAnimationFrame(T);const e=C[0];e.color.set(f.material1.color).convertSRGBToLinear(),e.emissive.set(f.material1.emissive).convertSRGBToLinear(),e.emissiveIntensity=f.material1.emissiveIntensity,e.metalness=f.material1.metalness,e.roughness=f.material1.roughness,e.transmission=f.material1.transmission,e.ior=f.material1.ior,e.opacity=f.material1.opacity;const a=C[1];a.color.set(f.material2.color).convertSRGBToLinear(),a.emissive.set(f.material2.emissive).convertSRGBToLinear(),a.emissiveIntensity=f.material2.emissiveIntensity,a.metalness=f.material2.metalness,a.roughness=f.material2.roughness,a.transmission=f.material2.transmission,a.ior=f.material2.ior,a.opacity=f.material2.opacity;const t=C[2];t.color.set(f.material3.color).convertSRGBToLinear(),t.metalness=f.material3.metalness,t.roughness=f.material3.roughness,p.material.materials.updateFrom(g.materials,g.textures),p.material.filterGlossyFactor=f.filterGlossyFactor,p.material.environmentIntensity=f.environmentIntensity,p.material.environmentBlur=.35,w.updateMatrixWorld();for(let e=0,a=f.samplesPerFrame;e<a;e++)p.update();u.autoClear=!1,v.render(u),u.autoClear=!0,y.innerText=`Samples: ${Math.floor(p.samples)}`}window.innerWidth/window.innerHeight<.65&&(f.bounces=Math.max(f.bounces,6),f.resolutionScale*=.5,f.tiles=2),async function(){u=new r.WebGLRenderer({antialias:!0}),u.toneMapping=r.ACESFilmicToneMapping,document.body.appendChild(u.domElement),w=new r.PerspectiveCamera(75,window.innerWidth/window.innerHeight,.025,500),w.position.set(-4,2,3),p=new l.PathTracingRenderer(u),p.camera=w,p.material=new l.PhysicalPathTracingMaterial,p.material.setDefine("BOUNCES",f.bounces),p.material.setDefine("TRANSPARENT_TRAVERSALS",f.transparentTraversals),p.tiles.set(f.tiles,f.tiles),v=new i.FullScreenQuad(new r.MeshBasicMaterial({map:p.target.texture})),h=new s.OrbitControls(w,u.domElement),h.addEventListener("change",(()=>{p.reset()})),y=document.getElementById("samples");const e=new Promise((e=>{(new m.RGBELoader).load("https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/equirectangular/royal_esplanade_1k.hdr",(a=>{const t=new r.PMREMGenerator(u);t.compileCubemapShader();const n=t.fromEquirectangular(a);p.material.environmentMap=n.texture,e()}))})),a=new l.PathTracingSceneGenerator,t=(new o.GLTFLoader).setMeshoptDecoder(d.MeshoptDecoder).loadAsync("https://raw.githubusercontent.com/gkjohnson/gltf-demo-models/main/material-balls/material_ball_v2.glb").then((e=>{const t=new r.Group;e.scene.scale.setScalar(.01),e.scene.updateMatrixWorld(),t.add(e.scene);const n=new r.Box3;n.setFromObject(e.scene);const i=new r.Mesh(new r.CylinderBufferGeometry(3,3,.05,200),new r.MeshStandardMaterial({color:16777215,roughness:0,metalness:.25}));i.geometry=i.geometry.toNonIndexed(),i.geometry.clearGroups(),i.position.y=n.min.y-.03,t.add(i);const o=new r.MeshStandardMaterial,s=new r.MeshStandardMaterial;return e.scene.traverse((e=>{e.geometry&&e.geometry.computeVertexNormals(),"Sphere_1"===e.name?e.material=s:e.material=o,"subsphere_1"===e.name&&(e.material=s)})),C=[o,s,i.material],a.generate(t)})).then((e=>{g=e;const{bvh:t,textures:n,materials:r}=e,i=t.geometry,o=p.material;o.bvh.updateFrom(t),o.normalAttribute.updateFrom(i.attributes.normal),o.tangentAttribute.updateFrom(i.attributes.tangent),o.uvAttribute.updateFrom(i.attributes.uv),o.materialIndexAttribute.updateFrom(i.attributes.materialIndex),o.textures.setTextures(u,2048,2048,n),o.materials.updateFrom(r,n),o.setDefine("MATERIAL_LENGTH",r.length),a.dispose()}));await Promise.all([t,e]),document.getElementById("loading").remove(),b(),window.addEventListener("resize",b);const n=new c.GUI,x=n.addFolder("Path Tracing");x.add(f,"acesToneMapping").onChange((e=>{u.toneMapping=e?r.ACESFilmicToneMapping:r.NoToneMapping,v.material.needsUpdate=!0})),x.add(f,"stableNoise").onChange((e=>{p.stableNoise=e})),x.add(f,"tiles",1,4,1).onChange((e=>{p.tiles.set(e,e)})),x.add(f,"samplesPerFrame",1,10,1),x.add(f,"filterGlossyFactor",0,1).onChange((()=>{p.reset()})),x.add(f,"environmentIntensity",0,10).onChange((()=>{p.reset()})),x.add(f,"environmentRotation",0,40).onChange((e=>{p.material.environmentRotation.setFromMatrix4((new r.Matrix4).makeRotationY(e)),p.reset()})),x.add(f,"bounces",1,30,1).onChange((e=>{p.material.setDefine("BOUNCES",e),p.reset()})),x.add(f,"transparentTraversals",0,40,1).onChange((e=>{p.material.setDefine("TRANSPARENT_TRAVERSALS",e),p.reset()})),x.add(f,"resolutionScale",.1,1).onChange((()=>{b()}));const S=n.addFolder("Shell Material");S.addColor(f.material1,"color").onChange(M),S.addColor(f.material1,"emissive").onChange(M),S.add(f.material1,"emissiveIntensity",0,50,.01).onChange(M),S.add(f.material1,"roughness",0,1).onChange(M),S.add(f.material1,"metalness",0,1).onChange(M),S.add(f.material1,"opacity",0,1).onChange(M),S.add(f.material1,"transmission",0,1).onChange(M),S.add(f.material1,"ior",.9,3).onChange(M),S.open();const R=n.addFolder("Ball Material");R.addColor(f.material2,"color").onChange(M),R.addColor(f.material2,"emissive").onChange(M),R.add(f.material2,"emissiveIntensity",0,50,.01).onChange(M),R.add(f.material2,"roughness",0,1).onChange(M),R.add(f.material2,"metalness",0,1).onChange(M),R.add(f.material2,"opacity",0,1).onChange(M),R.add(f.material2,"transmission",0,1).onChange(M),R.add(f.material2,"ior",.9,3).onChange(M),R.open();const F=n.addFolder("Floor Material");F.addColor(f.material3,"color").onChange(M),F.add(f.material3,"roughness",0,1).onChange(M),F.add(f.material3,"metalness",0,1).onChange(M),T()}();
//# sourceMappingURL=materialBall.2d30a0c5.js.map

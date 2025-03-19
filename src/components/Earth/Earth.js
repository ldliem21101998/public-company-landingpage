import React, { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";
import { TextureLoader } from "three";
import EarthDayMap from "../../assets/earth/8k_earth_daymap.jpg";
import EarthNormalMap from "../../assets/earth/8k_earth_normal_map.jpg";
import EarthSpecularMap from "../../assets/earth/8k_earth_specular_map.jpg";
import EarthCloudsMap from "../../assets/earth/8k_earth_clouds.jpg";

const Earth = ({ size }) => {

    const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(
        TextureLoader,
        [EarthDayMap, EarthNormalMap, EarthSpecularMap, EarthCloudsMap]
    );

    const earthRef = useRef();
    const cloudsRef = useRef();

    useFrame(({ clock }) => {
        const elapsedTime = clock.getElapsedTime();

        earthRef.current.rotation.y = elapsedTime / 9;
        cloudsRef.current.rotation.y = elapsedTime / 9;
    });

    return (
        <>
            <ambientLight intensity={9} />
            {/* <Stars
                radius={300}
                depth={60}
                count={6000}
                factor={7}
                saturation={0}
                fade={true}
            /> */}
            {/* <pointLight color="#f6f3ea" position={[1, 0, 3]} intensity={30}/> */}
            <mesh ref={cloudsRef}
            // position={[0, 0, 3]}
            >
                <sphereGeometry args={size ? size : [1.005, 32, 32]} />
                <meshPhongMaterial
                    map={cloudsMap}
                    opacity={0.4}
                    depthWrite={true}
                    transparent={true}
                    side={THREE.DoubleSide}
                />
            </mesh>
            <mesh ref={earthRef}
            // position={[0, 0, 3]}
            >
                <sphereGeometry args={size ? size : [1, 32, 32]} />
                <meshPhongMaterial specularMap={specularMap} />
                <meshStandardMaterial
                    map={colorMap}
                    normalMap={normalMap}
                    metalness={0.4}
                    roughness={0.7}
                />
                {/* <OrbitControls
                    enableZoom={true}
                    enablePan={true}
                    enableRotate={true}
                    zoomSpeed={0.6}
                    minDistance={2}
                    maxDistance={3}
                    panSpeed={0.5}
                    rotateSpeed={0.4}
                /> */}
            </mesh>
        </>
    )
}

export default Earth
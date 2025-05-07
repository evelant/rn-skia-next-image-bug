import { StatusBar } from 'expo-status-bar';
import {Button, StyleSheet, Text, View} from 'react-native';
import {Canvas, useImage, Image} from '@shopify/react-native-skia';
import _ from "lodash"
import React from "react";

export default function App() {
    const [toggle, setToggle] = React.useState(false);

  return (
    <View style={styles.container}>
        <WorkingImages />
        {toggle ? <BrokenImages /> : null}
      <StatusBar style="auto" />
        <Button title={"toggle 2nd example"} onPress={() => setToggle(!toggle)} />

    </View>
  );
}

const WorkingImages = () => {
    const images = [2,0,1].map(i => ({
        zIndex: i,
        img: <TestImage key={i} index={i} />
    }))
    return (
        <View style={styles.container}>
            <Text>This works, but only after first re-render, toggle to see</Text>
            <Canvas style={{width: 200, height: 200, backgroundColor: "red"}}>
                {images.map(i => i.img)}
            </Canvas>
        </View>

    )
}

const BrokenImages = () => {
    const images = [2,0,1].map(i => ({
        zIndex: i,
        img: <TestImage key={i} index={i} />
    }))
    return (
        <View style={styles.container}>
            <Text>This does not work, no images are rendered regardless of other test component being rendered (but oddly, will render after a fast refresh)</Text>
            <Canvas style={{width: 200, height: 200, backgroundColor: "cyan"}}>
                <>{_.sortBy(images, "zIndex").map(i => i.img)}</>
            </Canvas>
        </View>

    )
}



const TestImage = ({index}: {index: number}) => {
  const image = useImage(require('./assets/icon.png'));

  return <Image image={image} x={index * 50} y={index * 50}  width={100} height={100} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
      padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

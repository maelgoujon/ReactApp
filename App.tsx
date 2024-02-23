import React, { useRef, useState } from 'react';
import { Alert, Button, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

type CatProps = {
  name: string;
};

const Coucou = () => {
  return (
    <View>
      <Text>Coucou</Text>
    </View>
  );
}

const Cat = (props: CatProps) => {
  const [isHungry, setIsHungry] = useState(true);
  const createTwoButtonAlert = () =>
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      { text: 'OK', onPress: () => console.log('OK Pressed') },
    ]);
  const createThreeButtonAlert = () =>
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Ask me later',
        onPress: () => console.log('Ask me later pressed'),
      },
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      { text: 'OK', onPress: () => console.log('OK Pressed') },
    ], {
      cancelable: true,
      onDismiss: () =>
        Alert.alert(
          'This alert was dismissed by tapping outside of the alert dialog.', 'okok', [
          {
            text: 'OK',
            onPress: () => console.log('OK Pressed'),
            style: 'cancel',
          },
        ], {
          cancelable: true,
        }
        ),
    },
    );

  return (
    <View style={styles.container}>
      <Text>
        I am {props.name}, and I am {isHungry ? 'hungry' : 'full'}!
      </Text>
      <TouchableOpacity onPress={() => {
        setIsHungry(!isHungry);
      }}
        style={styles.loginScreenButton}>
        <Text style={isHungry ? styles.loginText : styles.loginTextSelected}>{isHungry ? 'Pour me some milk, please!' : 'Thank you!'}</Text>
      </TouchableOpacity>
      <Button onPress={() => Alert.alert('Button with adjusted color pressed')}
        title={isHungry ? 'Pour me some milk, please!' : 'Thank you!'}
        color={isHungry ? 'red' : 'green'}
        accessibilityLabel="Learn more about this purple button"
      />
      <Button title={'2-Button Alert'} onPress={createTwoButtonAlert} />
      <Button title={'3-Button Alert'} onPress={createThreeButtonAlert} />
    </View>
  );
};

const PizzaTranslator = () => {
  const [text, setText] = useState('');
  return (
    <View style={{ padding: 10 }}>
      <TextInput
        style={{ height: 40 }}
        placeholder="Type here to translate!"
        onChangeText={newText => setText(newText)}
        defaultValue={text}
      />
      <Text style={{ padding: 10, fontSize: 42 }}>
        {text
          .split(' ')
          .map(word => word && '🍕')
          .join(' ')}
      </Text>
    </View>
  );
};

const FlexDimensionsBasics = () => {
  return (
    // Try removing the `flex: 1` on the parent View.
    // The parent will not have dimensions, so the children can't expand.
    // What if you add `height: 300` instead of `flex: 1`?
    <View style={{ height: 300 }}>
      <View style={{ flex: 1, backgroundColor: 'powderblue' }} />
      <View style={{ flex: 2, backgroundColor: 'skyblue' }} />
      <View style={{ flex: 3, backgroundColor: 'steelblue' }} />
    </View>

  );
};

const ImageExample = ({ scrollViewRef }: { scrollViewRef: React.RefObject<ScrollView> }) => (
  <View >
    <View style={styles.containerImages}>
      <Image
        source={{ uri: 'https://reactnative.dev/docs/assets/p_cat1.png' }}
        style={styles.image}
      />
      <Image
        source={{ uri: 'https://reactnative.dev/docs/assets/p_cat2.png' }}
        style={[styles.image, { marginLeft: 20 }]} // add a margin to create some space between the images
      />
    </View>
    
    <TouchableOpacity onPress={() => scrollViewRef.current?.scrollTo({ x: 0, y: 0, animated: true })}>
      <View style={styles.thirdImageContainer}>
        <Image source={{ uri: 'https://reactjs.org/logo-og.png' }}
          style={styles.largeImage}
        />
      </View>
    </TouchableOpacity>
  </View>
);

const Cafe = () => {
  const scrollViewRef = useRef<ScrollView>(null); // Create a ref for the ScrollView

  return (


    <ScrollView ref={scrollViewRef}>
      <Cat name="Munkustrap" />
      <Cat name="Spot" />
      <PizzaTranslator />
      <FlexDimensionsBasics />
      <ImageExample scrollViewRef={scrollViewRef} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  loginScreenButton: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#1E6738',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff'
  },
  loginText: {
    color: '#fff',
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10
  },
  loginTextSelected: {
    color: 'red',
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10
  },
  button: {
    paddingVertical: 10,
    marginTop: 20,
  },
  redBackground: {
    backgroundColor: 'red',
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  containerImages: {
    flexDirection: 'row', // set the direction to row for placing images side by side
  },
  image: {
    width: 200,
    height: 200,
  },
  thirdImageContainer: {
    marginTop: 20, // add some space between the first two images and the third one
    backgroundColor: 'yellow', // add a background color to the container
    alignItems: 'center', // align the items to the center

  },
  largeImage: {
    minHeight: 200, // set a minimum height for the image
    minWidth: 200, // set a minimum width for the image
    aspectRatio: 1, // set the aspect ratio to 1:1
    margin: 100, // add some margin to the image
    flex: 1, // set the flex property to 1
    borderRadius: 50, // set the border radius to 100


  }
});


export default Cafe;
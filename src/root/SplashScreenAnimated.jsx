// import React, { useEffect, useRef, useState } from 'react';
// import {
//   View,
//   Image,
//   StyleSheet,
//   Dimensions,
//   Animated,
//   StatusBar,
// } from 'react-native';

// const { width, height } = Dimensions.get('window');

// const SplashScreen = ({ navigation }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const animValues = useRef([
//     new Animated.Value(0),        // img1 (no transform)
//     new Animated.Value(width),   // img2: slide in from right
//     new Animated.Value(-30),     // img3: fade in from top
//     new Animated.Value(-width),  // img5: slide from left
//   ]).current;

//   const fadeAnim = useRef(new Animated.Value(0)).current;
//   const scaleAnim = useRef(new Animated.Value(1)).current;

//   const images = [
//     require('../../assets/images/img1.png'),
//     require('../../assets/images/img2.png'),
//     require('../../assets/images/img3.png'),
//     require('../../assets/images/img4.png'), // img5 (index 3)
//   ];

//   useEffect(() => {
//     animateImage(currentIndex);

//     const interval = setInterval(() => {
//       const nextIndex = currentIndex + 1;
//       if (nextIndex >= images.length) {
//         clearInterval(interval);
//         navigateToMain();
//       } else {
//         setCurrentIndex(nextIndex);
//         animateImage(nextIndex);
//       }
//     }, 2000);

//     return () => clearInterval(interval);
//   }, [currentIndex]);

//   const animateImage = index => {
//     fadeAnim.setValue(0);
//     scaleAnim.setValue(index === 3 ? 0.3 : 1); // img5 starts at scale 0.3

//     animValues[index].setValue(
//       index === 1 ? width :
//       index === 2 ? -30 :
//       index === 3 ? -width :
//       0
//     );

//     const animations = [];

//     // Common fade-in
//     animations.push(
//       Animated.timing(fadeAnim, {
//         toValue: 1,
//         duration: 500,
//         useNativeDriver: true,
//       })
//     );

//     switch (index) {
//       case 1: // img2: slide from right
//         animations.push(
//           Animated.timing(animValues[1], {
//             toValue: 0,
//             duration: 500,
//             useNativeDriver: true,
//           })
//         );
//         break;

//       case 2: // img3: fade from top
//         animations.push(
//           Animated.timing(animValues[2], {
//             toValue: 0,
//             duration: 500,
//             useNativeDriver: true,
//           })
//         );
//         break;

//       case 3: // img5: slide from left → scale
//         animations.push(
//           Animated.timing(animValues[3], {
//             toValue: 0,
//             duration: 700,
//             useNativeDriver: true,
//           })
//         );

//         // Run slide + fade first, then scale up
//         Animated.sequence([
//           Animated.parallel(animations),
//           Animated.timing(scaleAnim, {
//             toValue: 1,
//             duration: 1000,
//             useNativeDriver: true,
//           }),
//         ]).start();
//         return; // Skip the final parallel start below
//     }

//     Animated.parallel(animations).start();
//   };

//   const navigateToMain = () => {
//     navigation.replace('AppNavigator'); // Your main app screen
//   };

//   const renderImage = index => {
//     const image = images[index];
//     let animatedStyle = { opacity: fadeAnim };

//     switch (index) {
//       case 0:
//         animatedStyle.transform = [{ scale: 0.3 }];
//         break;
//       case 1:
//         animatedStyle.transform = [{ translateX: animValues[1] }];
//         break;
//       case 2:
//         animatedStyle.transform = [{ translateY: animValues[2] }];
//         break;
//       case 3:
//         animatedStyle.transform = [
//           { translateX: animValues[3] },
//           { scale: scaleAnim },
//         ];
//         break;
//     }

//     return (
//       <Animated.Image
//         key={index}
//         source={image}
//         resizeMode="contain"
//         style={[styles.image, animatedStyle]}
//       />
//     );
//   };

//   return (
//     <View style={styles.container}>
//       {renderImage(currentIndex)}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   image: {
//     width: width * 0.9,
//     height: height * 0.9,
//   },
// });

// export default SplashScreen;

// version 2 with rotating issue

// import React, {useEffect, useRef, useState} from 'react';
// import {
//   View,
//   Image,
//   StyleSheet,
//   Dimensions,
//   Animated,
//   StatusBar,
// } from 'react-native';

// const {width, height} = Dimensions.get('window');

// const SplashScreen = ({navigation}) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const animValues = useRef([
//     new Animated.Value(0), // img1 (no transform)
//     new Animated.Value(width), // img2: slide in from right
//     new Animated.Value(0), // img3 container scaleY for reveal
//     new Animated.Value(-width), // img5: slide from left
//   ]).current;

//   const fadeAnim = useRef(new Animated.Value(0)).current;
//   const scaleAnim = useRef(new Animated.Value(1)).current;

//   const images = [
//     require('../../assets/images/img1.png'),
//     require('../../assets/images/img2.png'),
//     require('../../assets/images/img3.png'),
//     require('../../assets/images/img4.png'), // img5 (index 3)
//   ];

//   useEffect(() => {
//     animateImage(currentIndex);

//     const interval = setInterval(() => {
//       const nextIndex = currentIndex + 1;
//       if (nextIndex >= images.length) {
//         clearInterval(interval);
//         navigateToMain();
//       } else {
//         setCurrentIndex(nextIndex);
//         animateImage(nextIndex);
//       }
//     }, 2000);

//     return () => clearInterval(interval);
//   }, [currentIndex]);

//   const animateImage = index => {
//     fadeAnim.setValue(0);
//     scaleAnim.setValue(index === 3 ? 0.3 : 1);

//     animValues[index]?.setValue(
//       index === 1
//         ? width
//         : index === 3
//         ? -width
//         : index === 2
//         ? 0 // for img3 scaleY starts at 0
//         : 0,
//     );

//     const animations = [];

//     switch (index) {
//       case 1: // img2: slide from right
//         animations.push(
//           Animated.timing(fadeAnim, {
//             toValue: 1,
//             duration: 500,
//             useNativeDriver: true,
//           }),
//           Animated.timing(animValues[1], {
//             toValue: 0,
//             duration: 500,
//             useNativeDriver: true,
//           }),
//         );
//         break;

//       case 2: // img3: fade reveal top-to-bottom by animating scaleY + fade opacity
//         animValues[2].setValue(0); // reset scaleY to 0
//         animations.push(
//           Animated.timing(fadeAnim, {
//             toValue: 1,
//             duration: 500,
//             useNativeDriver: true,
//           }),
//           Animated.timing(animValues[2], {
//             toValue: 1,
//             duration: 700,
//             useNativeDriver: true,
//           }),
//         );
//         break;

//       case 3: // img5: slide from left + scale
//         animations.push(
//           Animated.timing(fadeAnim, {
//             toValue: 1,
//             duration: 500,
//             useNativeDriver: true,
//           }),
//           Animated.timing(animValues[3], {
//             toValue: 0,
//             duration: 700,
//             useNativeDriver: true,
//           }),
//         );
//         Animated.sequence([
//           Animated.parallel(animations),
//           Animated.timing(scaleAnim, {
//             toValue: 1,
//             duration: 1000,
//             useNativeDriver: true,
//           }),
//         ]).start();
//         return;

//       default:
//         animations.push(
//           Animated.timing(fadeAnim, {
//             toValue: 1,
//             duration: 500,
//             useNativeDriver: true,
//           }),
//         );
//     }

//     Animated.parallel(animations).start();
//   };

//   const navigateToMain = () => {
//     navigation.replace('AppNavigator');
//   };

//   const renderImage = index => {
//     const image = images[index];

//     if (index === 2) {
//       // img3 fade reveal from top-to-bottom with scaleY container
//       return (
//         <Animated.View
//           key={index}
//           style={{
//             overflow: 'hidden',
//             opacity: fadeAnim,
//             transform: [{scaleY: animValues[2]}],
//             alignItems: 'center',
//           }}>
//           <Image source={image} resizeMode="contain" style={styles.image} />
//         </Animated.View>
//       );
//     }

//     let animatedStyle = {opacity: fadeAnim};

//     switch (index) {
//       case 0:
//         animatedStyle.transform = [{scale: 0.3}];
//         break;
//       case 1:
//         animatedStyle.transform = [{translateX: animValues[1]}];
//         break;
//       case 3:
//         animatedStyle.transform = [
//           {translateX: animValues[3]},
//           {scale: scaleAnim},
//         ];
//         break;
//     }

//     return (
//       <Animated.Image
//         key={index}
//         source={image}
//         resizeMode="contain"
//         style={[styles.image, animatedStyle]}
//       />
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <StatusBar barStyle="dark-content" backgroundColor="#fff" />
//       {renderImage(currentIndex)}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   image: {
//     width: width * 0.9,
//     height: height * 0.9,
//   },
// });

// version 3 with package
// export default SplashScreen;

// import React, {useEffect, useRef, useState} from 'react';
// import {
//   View,
//   Image,
//   StyleSheet,
//   Dimensions,
//   Animated,
//   StatusBar,
// } from 'react-native';

// const {width, height} = Dimensions.get('window');

// const SplashScreen = ({navigation}) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const animValues = useRef([
//     new Animated.Value(0), // img1 (no transform)
//     new Animated.Value(width), // img2: slide in from right
//     new Animated.Value(-60), // img3: fade in from top (start higher)
//     new Animated.Value(-width), // img5: slide from left
//   ]).current;

//   const fadeAnim = useRef(new Animated.Value(0)).current;
//   const scaleAnim = useRef(new Animated.Value(1)).current;

//   const images = [
//     require('../../assets/images/img1.png'),
//     require('../../assets/images/img2.png'),
//     require('../../assets/images/img3.png'),
//     require('../../assets/images/img4.png'),
//   ];

//   useEffect(() => {
//     animateImage(currentIndex);

//     const interval = setInterval(() => {
//       const nextIndex = currentIndex + 1;
//       if (nextIndex >= images.length) {
//         clearInterval(interval);
//         navigateToMain();
//       } else {
//         setCurrentIndex(nextIndex);
//         animateImage(nextIndex);
//       }
//     }, 2000);

//     return () => clearInterval(interval);
//   }, [currentIndex]);

//   const animateImage = index => {
//     fadeAnim.setValue(0);
//     scaleAnim.setValue(index === 3 ? 0.3 : 1);

//     animValues[index]?.setValue(
//       index === 1 ? width : index === 3 ? -width : index === 2 ? -60 : 0,
//     );

//     const animations = [];

//     switch (index) {
//       case 1: // img2 slide from right
//         animations.push(
//           Animated.timing(fadeAnim, {
//             toValue: 1,
//             duration: 500,
//             useNativeDriver: true,
//           }),
//           Animated.timing(animValues[1], {
//             toValue: 0,
//             duration: 500,
//             useNativeDriver: true,
//           }),
//         );
//         break;

//       case 2: // img3 fade in + slight translate down slowly
//         animations.push(
//           Animated.timing(fadeAnim, {
//             toValue: 1,
//             duration: 1200,
//             useNativeDriver: true,
//           }),
//           Animated.timing(animValues[2], {
//             toValue: 0,
//             duration: 1200,
//             useNativeDriver: true,
//           }),
//         );
//         break;

//       case 3: // img5 slide from left + scale
//         animations.push(
//           Animated.timing(fadeAnim, {
//             toValue: 1,
//             duration: 500,
//             useNativeDriver: true,
//           }),
//           Animated.timing(animValues[3], {
//             toValue: 0,
//             duration: 700,
//             useNativeDriver: true,
//           }),
//         );
//         Animated.sequence([
//           Animated.parallel(animations),
//           Animated.timing(scaleAnim, {
//             toValue: 1,
//             duration: 1000,
//             useNativeDriver: true,
//           }),
//         ]).start();
//         return;

//       default:
//         animations.push(
//           Animated.timing(fadeAnim, {
//             toValue: 1,
//             duration: 500,
//             useNativeDriver: true,
//           }),
//         );
//     }

//     Animated.parallel(animations).start();
//   };

//   const navigateToMain = () => {
//     navigation.replace('AppNavigator');
//   };

//   const renderImage = index => {
//     const image = images[index];
//     let animatedStyle = {opacity: fadeAnim};

//     switch (index) {
//       case 0:
//         animatedStyle.transform = [{scale: 0.3}];
//         break;
//       case 1:
//         animatedStyle.transform = [{translateX: animValues[1]}];
//         break;
//       case 2:
//         animatedStyle.transform = [{translateY: animValues[2]}];
//         break;
//       case 3:
//         animatedStyle.transform = [
//           {translateX: animValues[3]},
//           {scale: scaleAnim},
//         ];
//         break;
//     }

//     return (
//       <Animated.Image
//         key={index}
//         source={image}
//         resizeMode="contain"
//         style={[styles.image, animatedStyle]}
//       />
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <StatusBar barStyle="dark-content" backgroundColor="#fff" />
//       {renderImage(currentIndex)}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   image: {
//     width: width * 0.9,
//     height: height * 0.9,
//   },
// });

// export default SplashScreen;

// import React, {useEffect, useRef, useState} from 'react';
// import {
//   View,
//   Image,
//   StyleSheet,
//   Dimensions,
//   Animated,
//   StatusBar,
// } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';

// const {width, height} = Dimensions.get('window');

// const SplashScreen = ({navigation}) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const animValues = useRef([
//     new Animated.Value(0), // img1 (no transform)
//     new Animated.Value(width), // img2: slide from right
//     new Animated.Value(height * 0.9), // img3: top reveal mask height
//     new Animated.Value(-width), // img4 (img5): slide from left
//   ]).current;

//   const fadeAnim = useRef(new Animated.Value(0)).current;
//   const scaleAnim = useRef(new Animated.Value(1)).current;

//   const images = [
//     require('../../assets/images/img1.png'),
//     require('../../assets/images/img2.png'),
//     require('../../assets/images/img3.png'),
//     require('../../assets/images/img4.png'), // formerly img5
//   ];

//   useEffect(() => {
//     animateImage(currentIndex);

//     const interval = setInterval(() => {
//       const nextIndex = currentIndex + 1;
//       if (nextIndex >= images.length) {
//         clearInterval(interval);
//         navigateToMain();
//       } else {
//         setCurrentIndex(nextIndex);
//         animateImage(nextIndex);
//       }
//     }, 2500);

//     return () => clearInterval(interval);
//   }, [currentIndex]);

//   const animateImage = index => {
//     fadeAnim.setValue(0);
//     scaleAnim.setValue(index === 3 ? 0.3 : 1);

//     animValues[index].setValue(
//       index === 1
//         ? width
//         : index === 2
//         ? height * 0.9
//         : index === 3
//         ? -width
//         : 0,
//     );

//     const animations = [];

//     switch (index) {
//       case 1: // img2: slide in from right
//         animations.push(
//           Animated.timing(fadeAnim, {
//             toValue: 1,
//             duration: 500,
//             useNativeDriver: true,
//           }),
//           Animated.timing(animValues[1], {
//             toValue: 0,
//             duration: 500,
//             useNativeDriver: true,
//           }),
//         );
//         break;

//       case 2: // img3: slow fade-in from top to bottom using mask
//         animations.push(
//           Animated.timing(fadeAnim, {
//             toValue: 1,
//             duration: 1400,
//             useNativeDriver: true,
//           }),
//           Animated.timing(animValues[2], {
//             toValue: 0,
//             duration: 1800,
//             useNativeDriver: false, // cannot animate height with native driver
//           }),
//         );
//         break;

//       case 3: // img4: slide from left and scale up
//         animations.push(
//           Animated.timing(fadeAnim, {
//             toValue: 1,
//             duration: 500,
//             useNativeDriver: true,
//           }),
//           Animated.timing(animValues[3], {
//             toValue: 0,
//             duration: 700,
//             useNativeDriver: true,
//           }),
//         );

//         Animated.sequence([
//           Animated.parallel(animations),
//           Animated.timing(scaleAnim, {
//             toValue: 1,
//             duration: 1000,
//             useNativeDriver: true,
//           }),
//         ]).start();
//         return;

//       default:
//         animations.push(
//           Animated.timing(fadeAnim, {
//             toValue: 1,
//             duration: 500,
//             useNativeDriver: true,
//           }),
//         );
//     }

//     Animated.parallel(animations).start();
//   };

//   const navigateToMain = () => {
//     navigation.replace('AppNavigator'); // Change as needed
//   };

//   const renderImage = index => {
//     const image = images[index];
//     let animatedStyle = {opacity: fadeAnim};

//     switch (index) {
//       case 0:
//         animatedStyle.transform = [{scale: 0.3}];
//         break;
//       case 1:
//         animatedStyle.transform = [{translateX: animValues[1]}];
//         break;
//       case 2:
//         animatedStyle.transform = [{scale: 1}]; // No translation
//         break;
//       case 3:
//         animatedStyle.transform = [
//           {translateX: animValues[3]},
//           {scale: scaleAnim},
//         ];
//         break;
//     }

//     // img3 only: apply gradient mask
//     if (index === 2) {
//       return (
//         <View style={styles.image}>
//           <Animated.Image
//             source={image}
//             resizeMode="contain"
//             style={[styles.image, animatedStyle]}
//           />
//           <Animated.View
//             pointerEvents="none"
//             style={[styles.gradientMask, {height: animValues[2]}]}>
//             <LinearGradient
//               colors={['#ffffff', 'transparent']}
//               style={styles.gradient}
//               start={{x: 0, y: 0}}
//               end={{x: 0, y: 1}}
//             />
//           </Animated.View>
//         </View>
//       );
//     }

//     return (
//       <Animated.Image
//         key={index}
//         source={image}
//         resizeMode="contain"
//         style={[styles.image, animatedStyle]}
//       />
//     );
//   };

//   return (
//     <View style={styles.container}>
//       {/* <StatusBar barStyle="dark-content" backgroundColor="#fff" /> */}
//       {renderImage(currentIndex)}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   image: {
//     width: width * 0.9,
//     height: height * 0.9,
//   },
//   gradientMask: {
//     position: 'absolute',
//     top: 0,
//     width: '100%',
//     backgroundColor: 'transparent',
//   },
//   gradient: {
//     flex: 1,
//     width: '100%',
//   },
// });

// export default SplashScreen;

// import React, {useEffect, useRef, useState} from 'react';
// import {
//   View,
//   Image,
//   StyleSheet,
//   Dimensions,
//   Animated,
//   StatusBar,
// } from 'react-native';

// const {width, height} = Dimensions.get('window');

// const SplashScreen = ({navigation}) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const animValues = useRef([
//     new Animated.Value(0), // img1 (scale only)
//     new Animated.Value(width), // img2: slide from right
//     new Animated.Value(height * 0.9), // img3: white overlay height (bottom-to-top)
//     new Animated.Value(-width), // img4 (img5): slide from left
//   ]).current;

//   const fadeAnim = useRef(new Animated.Value(0)).current;
//   const scaleAnim = useRef(new Animated.Value(1)).current;

//   const overlayHeight = animValues[2];

//   const images = [
//     require('../../assets/images/img1.png'),
//     require('../../assets/images/img2.png'),
//     require('../../assets/images/img3.png'),
//     require('../../assets/images/img4.png'),
//   ];

//   useEffect(() => {
//     animateImage(currentIndex);

//     const interval = setInterval(() => {
//       const nextIndex = currentIndex + 1;
//       if (nextIndex >= images.length) {
//         clearInterval(interval);
//         navigateToMain();
//       } else {
//         setCurrentIndex(nextIndex);
//         animateImage(nextIndex);
//       }
//     }, 2500);

//     return () => clearInterval(interval);
//   }, [currentIndex]);

//   const animateImage = index => {
//     fadeAnim.setValue(0);
//     scaleAnim.setValue(index === 3 ? 0.3 : 1);
//     overlayHeight.setValue(height * 0.9); // reset for img3

//     animValues[index].setValue(
//       index === 1
//         ? width
//         : index === 3
//         ? -width
//         : animValues[index].__getValue(),
//     );

//     const animations = [];

//     if (index !== 2) {
//       animations.push(
//         Animated.timing(fadeAnim, {
//           toValue: 1,
//           duration: 500,
//           useNativeDriver: true,
//         }),
//       );
//     }

//     switch (index) {
//       case 1:
//         animations.push(
//           Animated.timing(animValues[1], {
//             toValue: 0,
//             duration: 500,
//             useNativeDriver: true,
//           }),
//         );
//         break;

//       case 2:
//         Animated.parallel([
//           Animated.timing(fadeAnim, {
//             toValue: 1,
//             duration: 600,
//             useNativeDriver: true,
//           }),
//           Animated.timing(overlayHeight, {
//             toValue: 0,
//             duration: 1500,
//             useNativeDriver: false,
//           }),
//         ]).start();
//         return;

//       case 3:
//         animations.push(
//           Animated.timing(fadeAnim, {
//             toValue: 1,
//             duration: 500,
//             useNativeDriver: true,
//           }),
//           Animated.timing(animValues[3], {
//             toValue: 0,
//             duration: 700,
//             useNativeDriver: true,
//           }),
//         );
//         Animated.sequence([
//           Animated.parallel(animations),
//           Animated.timing(scaleAnim, {
//             toValue: 1,
//             duration: 1000,
//             useNativeDriver: true,
//           }),
//         ]).start();
//         return;
//     }

//     Animated.parallel(animations).start();
//   };

//   const navigateToMain = () => {
//     navigation.replace('AppNavigator');
//   };

//   const renderImage = index => {
//     const image = images[index];
//     let animatedStyle = {opacity: fadeAnim};

//     switch (index) {
//       case 0:
//         animatedStyle.transform = [{scale: 0.3}];
//         break;
//       case 1:
//         animatedStyle.transform = [{translateX: animValues[1]}];
//         break;
//       case 3:
//         animatedStyle.transform = [
//           {translateX: animValues[3]},
//           {scale: scaleAnim},
//         ];
//         break;
//     }

//     if (index === 2) {
//       return (
//         <View style={styles.image}>
//           <Animated.Image
//             source={image}
//             resizeMode="contain"
//             style={[styles.image, {opacity: fadeAnim}]}
//           />
//           <Animated.View
//             style={[
//               styles.overlayMask,
//               {
//                 height: overlayHeight,
//                 bottom: 0, // ← this is key for bottom-to-top
//               },
//             ]}
//           />
//         </View>
//       );
//     }

//     return (
//       <Animated.Image
//         key={index}
//         source={image}
//         resizeMode="contain"
//         style={[styles.image, animatedStyle]}
//       />
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <StatusBar barStyle="dark-content" backgroundColor="#fff" />
//       {renderImage(currentIndex)}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   image: {
//     width: width * 0.9,
//     height: height * 0.9,
//     overflow: 'hidden',
//   },
//   overlayMask: {
//     position: 'absolute',
//     left: 0,
//     width: '100%',
//     backgroundColor: '#fff',
//   },
// });

// export default SplashScreen;

import React, {useEffect, useRef} from 'react';
import {View, Animated, StyleSheet, Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import * as SplashScreen from "expo-splash-screen";
const {width, height} = Dimensions.get('window');

const IMG1_WIDTH = 150;
const IMG2_WIDTH = 80;
const GAP = -20; // no gap between img1 and img2 as requested

const SplashScreenAnimated = ({ onFinish }) => {
  const navigation = useNavigation();

  const img1Opacity = useRef(new Animated.Value(0)).current;

  // Container holding img1 and img2
  const containerX = useRef(new Animated.Value(0)).current;

  const img1Scale = useRef(new Animated.Value(0.5)).current;

  // img2 sliding inside container, starts at offset IMG1_WIDTH (offscreen right)
  const img2X = useRef(new Animated.Value(IMG1_WIDTH)).current;

  const img2Scale = useRef(new Animated.Value(1.5)).current; // fixed scale

  // img3 sliding below container
  const img3X = useRef(new Animated.Value(width)).current;
  const img3Scale = useRef(new Animated.Value(2.2)).current;

  // useEffect(() => {
  //   Animated.sequence([
  //     // 1. Fade in img1 (and container)
  //     Animated.timing(img1Opacity, {
  //       toValue: 1,
  //       duration: 800,
  //       useNativeDriver: true,
  //     }),

  //     // 2. Slide img2 from right inside container (from IMG1_WIDTH to 0)
  //     Animated.timing(img2X, {
  //       toValue: 0,
  //       duration: 500,
  //       useNativeDriver: true,
  //     }),

  //     // 3. Slide container left by IMG2_WIDTH + GAP to position images nicely
  //     Animated.timing(containerX, {
  //       toValue: -(IMG2_WIDTH + GAP),
  //       duration: 500,
  //       useNativeDriver: true,
  //     }),

  //     // 4. Slide img3 from right below container
  //     Animated.timing(img3X, {
  //       toValue: 0,
  //       duration: 500,
  //       useNativeDriver: true,
  //     }),

  //     // 5. Slide out img3 (right off screen)
  //     Animated.timing(img3X, {
  //       toValue: width,
  //       duration: 500,
  //       delay: 800,
  //       useNativeDriver: true,
  //     }),

  //     // 6. Slide out img2 (right off screen)
  //     Animated.timing(img2X, {
  //       toValue: width,
  //       duration: 500,
  //       delay: 300,
  //       useNativeDriver: true,
  //     }),

  //     // 7. Slide container back to center and scale img1 from 0.3 to 1
  //     //   Animated.parallel([
  //     //     Animated.timing(containerX, {
  //     //       toValue: 0,
  //     //       duration: 500,
  //     //       useNativeDriver: true,
  //     //     }),
  //     //     Animated.timing(img1Scale, {
  //     //       toValue: 2,
  //     //       duration: 500,
  //     //       useNativeDriver: true,
  //     //     }),
  //     //   ]),
  //     Animated.sequence([
  //       // First: Move container to center
  //       Animated.timing(containerX, {
  //         toValue: 0,
  //         duration: 500,
  //         useNativeDriver: true,
  //       }),
  //       // Then: Scale up img1
  //       Animated.timing(img1Scale, {
  //         toValue: 2.2,
  //         duration: 500,
  //         useNativeDriver: true,
  //       }),
  //     ]),
  //   ]).start(() => {
  //     // navigation.replace('AppNavigator');
  //      onFinish?.();
  //   });
  // }, [navigation]);

useEffect(() => {
  const startAnimation = async () => {
    await SplashScreen.hideAsync(); // hide native splash **before** animation starts

    Animated.sequence([
      Animated.timing(img1Opacity, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.timing(img2X, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(containerX, {
        toValue: -(IMG2_WIDTH + GAP),
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(img3X, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(img3X, {
        toValue: width,
        duration: 500,
        delay: 800,
        useNativeDriver: true,
      }),
      Animated.timing(img2X, {
        toValue: width,
        duration: 500,
        delay: 300,
        useNativeDriver: true,
      }),
      Animated.sequence([
        Animated.timing(containerX, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(img1Scale, {
          toValue: 2.2,
          duration: 500,
          useNativeDriver: true,
        }),
      ]),
    ]).start(() => {
      onFinish?.(); // mark splash as complete
    });
  };

  startAnimation();
}, []);


  return (
    <View style={styles.container}>
      {/* Container with img1 and img2 */}
      <Animated.View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          opacity: img1Opacity,
          transform: [{translateX: containerX}],
          position: 'absolute',
          top: height / 2 - IMG1_WIDTH / 2,
          left: width / 2 - IMG1_WIDTH / 2, // center img1 initially
        }}>
        <Animated.Image
          source={require('../../assets/images/img1.png')}
          style={{
            width: IMG1_WIDTH,
            height: IMG1_WIDTH,
            transform: [{scale: img1Scale}],
          }}
          resizeMode="contain"
        />

        <Animated.Image
          source={require('../../assets/images/img2.png')}
          style={{
            width: IMG2_WIDTH,
            height: IMG2_WIDTH,
            transform: [{translateX: img2X}, {scale: img2Scale}],
          }}
          resizeMode="contain"
        />
      </Animated.View>

      {/* img3 below */}
      <Animated.Image
        source={require('../../assets/images/img3.png')}
        style={{
          width: 80,
          height: 80,
          position: 'absolute',
          top: height / 2 + 10,
          left: width / 2 - 30,
          transform: [{translateX: img3X}, {scale: img3Scale}],
        }}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default SplashScreenAnimated;

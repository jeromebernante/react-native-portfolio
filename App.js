import React, {useState} from 'react';
import { SafeAreaView, ScrollView, View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';


const App = () => {
  const [currentSection, setCurrentSection] = useState('name');


  const data = {
    imageUrl: require('./assets/jerome.jpg'),
    name: 'Jerome V. Bernante',
    course: 'Bachelor of Science in Information Technology',
    education: {
      elementary: 'Tonsuya Elementary School',
      elementaryYear: 2006,
      highSchool: 'Tinajeros National High School',
      highSchoolYear: 2011,
      college: 'Datamex Institute of Compputer Technology Caloocan',
      collegeYear: 2013,
      college2: 'Global Reciprocap Colleges Caloocan',
      collegeYear2: 2025
    },
    about: 'Hi! I\'m Jerome Bernante an aspiring Full Stack Web Developer. I reside at Malabon City, Metro Manila. Currently studying at Global Reciprocal College. I am knowledgeable with the fundamentals of web development, such as HTML, CSS, JavaScript, and PHP. And also the basic programming concepts such as data structures, algorithms, object-oriented programming, and databases.',
    project1:
    {
      projectName: 'quizApp',
      imageSrc: require('./assets/quizapp.jpg'),
      link: 'https://github.com/jeromebernante/quizapp',
      description: 'quiz app is like a reviewer for upcomming quiz and exam'
    },
    project2:
    {
      projectName: 'snake 2 vs 2',
      imageSrc: require('./assets/snake.PNG'),
      link: 'https://github.com/jeromebernante',
      description: 'pixelated snake game made from python with pygame library'
    },
    contact:
    {
      email: 'jeromebernante@gmail.com',
      description: '09279892522'
    }

  }

  const handlePress = () => {
    setCurrentSection((prevSection) => {
      switch (prevSection) {
        case 'name':
          return 'education';
        case 'education':
          return 'about'
        case 'about':
          return 'project1'
        case 'project1':
          return 'project2'
        case 'project2':
          return 'contact'
        case 'contact':
          return 'name'
        default:
          return 'name'
      }
    });
  }


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <TouchableOpacity onPress={handlePress} style={styles.mainContainer}>
          {currentSection === 'name' && (
            <>
              <View style={{alignItems:'center'}}>
                <Image source={data.imageUrl} style={styles.profileImg}/>
              </View>
              <View>
                <Text style={[styles.textHeader, {textAlign:'center'}]}>{data.name}</Text>
                <Text style={[styles.textBody, {textAlign:'center'}]}>{data.course}</Text>
              </View>
            </>
          )}

          {currentSection === 'education' && (
            <View>
              <Text style={styles.textHeader}>Education: </Text>
              <Text style={styles.textHeaderSmall}>College:</Text>
              <Text style={[styles.textBody, {marginBottom:0}]}>{data.education.college2}</Text>
              <Text style={styles.textBodySubtle}>{data.education.collegeYear2}</Text>
              <Text style={[styles.textBody, {marginBottom:0}]}>{data.education.college}</Text>
              <Text style={styles.textBodySubtle}>{data.education.collegeYear}</Text>
              <Text style={styles.textHeaderSmall}>High School:</Text>
              <Text style={[styles.textBody, {marginBottom:0}]}>{data.education.highSchool}</Text>
              <Text style={styles.textBodySubtle}>{data.education.highSchoolYear}</Text>
              <Text style={styles.textHeaderSmall}>Elementary:</Text>
              <Text style={[styles.textBody, {marginBottom:0}]}>{data.education.elementary}</Text>
              <Text style={styles.textBodySubtle}>{data.education.elementaryYear}</Text>
            </View>
          )}

          {currentSection === 'about' && (
            <View>
              <Text style={styles.textHeader}>About Me: </Text>
              <Text>{data.about}</Text>
            </View>
          )}
          {currentSection === 'project1' && (
            <View>
              <Text style={styles.textHeader}>Project #1:</Text>
              <Text style={styles.textHeaderSmall}>{data.project1.projectName}</Text>
              <View style={{alignItems:'center'}}>
                <Image style={styles.projectImg} source={data.project1.imageSrc}/>
              </View>
               <Text style={styles.textBody}>{data.project1.link}</Text>
               <Text style={styles.textBody}>{data.project1.description}</Text>
            </View>
          )}
          {currentSection === 'project2' && (
            <View>
              <Text style={styles.textHeader}>Project #2:</Text>
              <Text style={styles.textHeaderSmall}>{data.project2.projectName}</Text>
              <View style={{alignItems:'center'}}>
                <Image style={styles.projectImg} source={data.project2.imageSrc}/>
              </View>
               <Text style={styles.textBody}>{data.project2.link}</Text>
               <Text style={styles.textBody}>{data.project2.description}</Text>
            </View>
          )}
          {currentSection === 'contact' && (
            <View>
               <Text style={styles.textHeader}>Contact Me:</Text>
               <Text style={styles.textBodySubtle}>Email:</Text>
               <Text style={styles.textBody}>jeromebernante@gmail.com</Text>
               <Text style={styles.textBodySubtle}>Contact Number:</Text>
               <Text style={styles.textBody}>09279892522</Text>
            </View>
          )}

        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex:1,
    padding: 20,
    justifyContent: 'center',
  },
  profileImg: {
    height: 200,
    width: 200,
    borderRadius: 200 / 2,
    marginBottom: 20,
  },
    projectImg: {
    height: 200,
    width: 200,
    marginBottom: 20,
  },
  textHeader: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 12
  },
  textHeaderSmall: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12
  },
  textBody: {
    fontSize: 18,
    marginBottom: 12
  },
  textBodySubtle: {
    fontSize: 18,
    marginBottom: 12,
    color: 'gray'
  },
  borderRed: {
    borderWidth: 1, // border width
    borderColor: 'red', // border color
  }
})


export default App;
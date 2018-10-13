import firebase from 'firebase'
import 'firebase/firestore'
import firebaseConfig from './firebaseConfig'

const firebaseApp = firebase.initializeApp(firebaseConfig)

//wat change is under here
// const firebaseApp = firebase.initializeApp(firebaseConfig, {
//     timestampsInSnapshots: true
//   })
// const api = firebaseApp.firestore()
// api.settings({timestampsInSnapshots: true})

export default firebaseApp.firestore()
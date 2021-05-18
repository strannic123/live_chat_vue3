import {ref, watchEffect} from 'vue'
import {projectFirestore} from "../firebase/config";

const getCollection = (collection) => {
    const documents = ref(null)
    const error = ref(null)

    let collectionRef = projectFirestore.collection(collection)
        .orderBy('createdAt')

    const unsub = collectionRef.onSnapshot(snap => {
        console.log('snapshot get')
        let results = []
        snap.docs.forEach(doc => {
            doc.data().createdAt && results.push({...doc.data(), id: doc.id})
            documents.value = results
            error.value = null
        }, (err) => {
            console.log(err.message)
            documents.value = null
            error.value = 'could not fetch data'
        })
    })
    watchEffect(onInvalidate => {
        onInvalidate(() => unsub())
    })
    return {error, documents}
}

export default getCollection

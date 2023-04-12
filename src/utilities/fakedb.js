// use local storage to manage cart data
const addToDb = id => {
    let jobId = []
    const storedId = localStorage.getItem('applied-jobs')
    if (storedId) {
        if (storedId.includes(id)) {
            alert('Job already exists')
            return
        }
        jobId = [...JSON.parse(storedId), ...id]
    }else{
        jobId = [...id]
    }
    const newId = JSON.stringify(jobId)
    localStorage.setItem('applied-jobs', newId)
  
}

const getjobdetails = (data) => {
    const storedb = JSON.parse(localStorage.getItem('applied-jobs'));
   
    // final output
    const appliedJobs = [];
    if (storedb) {
        for(const id of storedb){
            const matchData = data.find(appliedJob => appliedJob.id === id)
            appliedJobs.push(matchData)
        }
    }
    return appliedJobs;
}


export {
    addToDb,
    getjobdetails,
}

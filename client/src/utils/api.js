/**
 * Defines the base URL for the API.
 * The default values is overridden by the `API_BASE_URL` environment variable.
 */
 

 //to look at the localhost OR our API during deployment
 const API_BASE_URL =
   process.env.REACT_APP_API_BASE_URL || "http://localhost:5000";
 

 /**
  * Defines the default headers for these functions to work with `json-server`
  */
 const headers = new Headers();
 headers.append("Content-Type", "application/json");
 

 /**
  * Fetch `json` from the specified URL and handle error status codes and ignore `AbortError`s
  *
  *
  * @param url
  *  the url for the requst.
  * @param options
  *  any options for fetch
  * @param onCancel
  *  value to return if fetch call is aborted. Default value is undefined.
  * @returns {Promise<Error|any>}
  *  a promise that resolves to the `json` data or an error.
  *  If the response is not in the 200 - 399 range the promise is rejected.
  */
 async function fetchJson(url, options, onCancel) {
   try {
     const response = await fetch(url, options);
 
     if (response.status === 204) {
       return null;
     }
 
     const payload = await response.json();
 
     if (payload.error) {
       return Promise.reject({ message: payload.error });
     }
     return payload.data;
   } catch (error) {
     if (error.name !== "AbortError") {
       console.error(error.stack);
       throw error;
     }
     return Promise.resolve(onCancel);
   }
 }
 


        //---- JOB REQUEST ---//

 /**
  * Retrieves all existing jobs.
  * @returns {Promise<[job]>}
  *  a promise that resolves to a possibly empty array of jobs saved in the database.
  */
 
 export async function listJobs(params, signal) {
  
 }
 


 /**
  * Creates and saves a new job to the database.
  * Takes in a job from the user
  * @param job
  *  the job to save
  * @param signal
  *  optional AbortController.signal
  * @returns {Promise<job>}
  *  a promise that resolves the saved job.
  */
  export async function createJob(job, signal) {
 
 }
 


 /**
  * Reads a job to the database.
  * @param job_id
  *  * Takes in a job_id
  * @param signal
  *  optional AbortController.signal
  * @returns {Promise<job>}
  *  a promise that resolves the saved job.
  */
  export async function readJob(job_id, signal) {
   
  }



 /**
  * Updates a job.
  * Takes in a job from the user
  * @param job_id
  *  the job that is to be updated
  * @param signal
  *  optional AbortController.signal
  * @returns {Promise<job>}
  *  a promise that resolves the saved job.
  */
  export async function updateJob(job_id, signal) {
  
 }
 
 
 
 /**
  * Deletes a job
  * @param jobId
  * the job that is being deleted
  * @param signal
  *  optional AbortController.signal
  * @returns {Promise<job>}
  *  a promise that resolves to the deletion of the job.
  */
  export async function deleteJob(jobId, signal) {

 }
 

    //---- INTERACTION REQUEST ---//


  /**
  * Retrieves all existing interactions for a specific job.
  * @returns {Promise<[interaction]>}
  *  a promise that resolves to possibly an empty array of interactions saved in the database.
  */
 
 export async function listInteractions(params, signal) {
  
}



/**
 * Creates and saves a new interaction to the database.
 * Takes in an interaction from the user
 * @param interaction
 *  the interaction to save
 * @param signal
 *  optional AbortController.signal
 * @returns {Promise<interaction>}
 *  a promise that resolves the saved interaction.
 */
 export async function createInteraction(job, signal) {

}



/**
 * Reads an interaction to the database.
 * @param interaction_id
 *  * Takes in a interaction_id
 * @param signal
 *  optional AbortController.signal
 * @returns {Promise<interaction>}
 *  a promise that resolves the saved interaction.
 */
 export async function readInteraction(interaction_id, signal) {
  
 }



/**
 * This updates an interaction.
 * Takes in an interaction from the user
 * @param interaction_id
 *  the interaction that is to be updated
 * @param signal
 *  optional AbortController.signal
 * @returns {Promise<interaction>}
 *  a promise that resolves the saved interaction.
 */
 export async function updateInteraction(interaction_id, signal) {
 
}



/**
 * This deletes an interaction
 * @param interactionId
 * the interaction that is being deleted
 * @param signal
 *  optional AbortController.signal
 * @returns {Promise<interaction>}
 *  a promise that resolves to the deletion of the interaction.
 */
 export async function deleteInteraction(interactionId, signal) {

}

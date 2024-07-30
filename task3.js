async function awaitCall(){
    try{
        const response = await Apicall();
        console.log('API call successful:', response);
    } catch (error) {
      console.error('An error occurred while making the API call:', error.message);
    }
  }
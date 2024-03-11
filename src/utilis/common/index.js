//truncating string 
export const truncateString=(text, maxLength) =>{
    if (text?.length <= maxLength) {
      return text;
    } else {
      return text?.substring(0, maxLength) + '...';
    }
  }

  // converting minutes to requried format
 export const convertMinutesToHoursAndMinutes=(minutes) =>{
  
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours}h ${remainingMinutes}m`;
  }

// converting full date to just year
  export const extractYear=(dateString) =>{
    const date = new Date(dateString);
    return date.getFullYear();
  }
 
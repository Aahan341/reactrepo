const useOnlineStatus = () => {
    let online = window.navigator.onLine
    if (navigator.onLine) {
        return true
    } else {
        return false
      }  
};

export default useOnlineStatus;

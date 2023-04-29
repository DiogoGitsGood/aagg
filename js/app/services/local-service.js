const externals = {};

// Function to set an item in local storage
externals.localSave = function (key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
  
  // Function to get an item from local storage
 externals.localLoad = function (key) {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  }
  externals.localDelete = function(key) {
  localStorage.removeItem(key);
}
 
export default externals;
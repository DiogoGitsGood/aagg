 const externals = {};

  function renderButton(app) {
    console.log("render button");
    app.append(`
      <input type='text' id='search' name='search-field'><br>
      <button style='border: 1px solid; margin-top: 30px; margin-left: 200px; margin-right: 30px; class:search-btn;'> Search </button></form>
     `);
   
}

function draw(){
  
}
  externals.render = function () {
    let app = $('#app').empty();

    renderButton(app);
  };

  export default externals;
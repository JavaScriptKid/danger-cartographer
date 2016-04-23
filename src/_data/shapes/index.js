var Shapes = {
    structures: {},
    objects: {}
};

var req = require.context("./structures", true, /^(.*\.(js$))[^.]*$/igm);
req.keys().forEach(function(key){

    const structure = req(key);
    const keyName = key.replace('./', '').replace('.js', '');

    Shapes.structures[keyName] = {...structure};
});

console.log('----------')
export default Shapes
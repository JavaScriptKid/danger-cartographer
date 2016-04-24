export default function(search="") {
    if (/\?graphic=/.test(search)) {
        return search.split('graphic=')[1];
    }
    return null;
}
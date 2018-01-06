export default function() {
  let array = []; 
  const LAST_IMAGE_INDEX=26;
  for (let i=0; i<=LAST_IMAGE_INDEX; i++) {
    array.push({src: require(`../assets/images/o (${i}).jpg`)})
  };
  return array;
}

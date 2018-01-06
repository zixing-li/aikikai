export default function() {
  let array = [];
  for (let i=0; i<=26; i++) {
    array.push({src: require(`../assets/o (${i}).jpg`)})
  };
  return array;
}

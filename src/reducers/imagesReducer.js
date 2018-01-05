export default function() {
  let array = [];
  for (let i=1; i<=2; i++) {
    array.push({src: require(`../assets/o-${i}.png`)})
  };
  return array;
}

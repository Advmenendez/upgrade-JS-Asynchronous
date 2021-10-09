
  const getCharacter = async () => {
  let result = await fetch('https://api.agify.io?name=michael'); 
  let characterData = await result.json(); 
  console.log("El resultado de mi petición es:", characterData); 
};
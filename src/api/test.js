export default async function formHandler(req, res) {
  // const body = JSON.parse(req.body);
  // const url = `https://www.google.com/recaptcha/api/siteverify?secret=${body.secret}&response=${body.response}`;

  // try {
  //   const result = await fetch(url, {
  //     method: 'POST',
  //   }).then((res) => {
  //     return res.json();
  //   });

  //   res.json(result);
  // } catch (error) {
  //   res.json(error);
  // }
  res.json('hola');
}

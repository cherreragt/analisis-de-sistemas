'use strict';
const form = document.querySelector('#examen');
if (form) {
  const preguntas = [...form.querySelectorAll('.pregunta')];
  const avance = document.querySelector('#avance');
  const resultado = document.querySelector('#nota-final');
  let calificado = false;
  function contar() { return preguntas.filter(p => p.querySelector('input:checked')).length; }
  function limpiarNota() {
    resultado.hidden = true;
    preguntas.forEach(p => {
      p.querySelector('.resultado-item').textContent = '';
      p.classList.remove('correcta','incorrecta');
    });
  }
  form.addEventListener('change', () => {
    const respondidas = contar();
    if (calificado) {
      limpiarNota();
      calificado = false;
      avance.textContent = `${respondidas} de ${preguntas.length} respondidas. Cambiaste una respuesta; vuelve a calificar.`;
    } else avance.textContent = `${respondidas} de ${preguntas.length} respondidas`;
  });
  form.addEventListener('submit', event => {
    event.preventDefault();
    let aciertos = 0;
    preguntas.forEach(p => {
      const respuesta = p.querySelector('input:checked');
      const correcto = respuesta?.value === p.dataset.correcta;
      if (correcto) aciertos++;
      p.classList.toggle('correcta',correcto);
      p.classList.toggle('incorrecta',!correcto);
      p.querySelector('.resultado-item').textContent = correcto ? '✓ Correcta' : respuesta ? '✕ Incorrecta. Revisa la explicación.' : '— Sin responder. Cuenta como 0 puntos.';
      p.querySelector('details').open = true;
    });
    calificado = true;
    resultado.replaceChildren();
    const titulo = document.createElement('h2');
    titulo.textContent = `${(aciertos / preguntas.length * 15).toFixed(2)} / 15 puntos`;
    const detalle = document.createElement('p');
    detalle.textContent = `${aciertos} correctas de ${preguntas.length}; ${preguntas.length-contar()} sin responder. Revisa las explicaciones debajo de cada caso. Es una calificación de práctica, no una predicción de tu examen.`;
    resultado.append(titulo,detalle);
    resultado.hidden = false;
    resultado.focus();
  });
  document.querySelector('#reiniciar').addEventListener('click', () => {
    if (contar() && !window.confirm('¿Borrar las respuestas de este intento?')) return;
    form.reset();
    limpiarNota();
    calificado = false;
    preguntas.forEach(p => {p.querySelector('details').open = false;});
    avance.textContent = `0 de ${preguntas.length} respondidas`;
    preguntas[0].querySelector('input').focus();
  });
}

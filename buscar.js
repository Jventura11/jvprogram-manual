/* Buscador dentro de la página: esconde las secciones que no contienen la
   palabra. No consulta nada ni sale a internet; solo filtra lo que ya está. */
(function () {
  var caja = document.getElementById('buscar');
  if (!caja) return;

  var main = document.querySelector('main');
  var vacio = document.getElementById('sinresultados');

  // Cada H2 y lo que le sigue hasta el próximo H2 es un bloque.
  var bloques = [];
  var actual = null;
  Array.prototype.forEach.call(main.children, function (nodo) {
    if (nodo.tagName === 'H2' || nodo.classList.contains('pantalla')) {
      actual = { nodos: [nodo], texto: nodo.textContent };
      bloques.push(actual);
    } else if (actual && nodo.tagName !== 'FOOTER' && nodo.id !== 'sinresultados') {
      actual.nodos.push(nodo);
      actual.texto += ' ' + nodo.textContent;
    }
  });
  bloques.forEach(function (b) { b.texto = b.texto.toLowerCase(); });

  function normaliza(s) {
    return s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
  }
  bloques.forEach(function (b) { b.plano = normaliza(b.texto); });

  var pendiente;
  caja.addEventListener('input', function () {
    clearTimeout(pendiente);
    pendiente = setTimeout(filtra, 120);
  });

  function filtra() {
    var q = normaliza(caja.value.trim());
    var hallados = 0;

    bloques.forEach(function (b) {
      var entra = q === '' || b.plano.indexOf(q) !== -1;
      if (entra) hallados++;
      b.nodos.forEach(function (n) { n.hidden = !entra; });
    });

    if (vacio) vacio.style.display = (q !== '' && hallados === 0) ? 'block' : 'none';
  }
})();

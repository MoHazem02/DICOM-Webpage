function toggleMode() {
    var stylesheet = document.getElementById("stylesheet");
    if (stylesheet.href.match('night.css')) {
      stylesheet.href = '../Styles/day.css';
    } else {
      stylesheet.href = '../Styles/night.css';
    }
  }

  function toggleSidebar() {
    var sidebar = document.querySelector('.sidebar');
    if (sidebar.style.left === '-250px') {
      sidebar.style.left = '0';
    } else {
      sidebar.style.left = '-250px';
    }
  }
  
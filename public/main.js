const likes = document.getElementsByClassName("fa-thumbs-up");

const trash = document.getElementsByClassName("fa-trash");

Array.from(likes).forEach(function (element) {
  element.addEventListener('click', function () {
    const name = this.parentNode.parentNode.childNodes[1].innerText
    const rating = this.parentNode.parentNode.childNodes[3].innerText
    const bookReport = this.parentNode.parentNode.childNodes[5].innerText
    const likes = parseFloat(this.parentNode.parentNode.childNodes[7].innerText)
    console.log(name)
    console.log(rating)
    console.log(bookReport)
    console.log(likes)
    fetch('messages', {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        'name': name,
        'rating': rating,
        'bookReport': bookReport,
        'likes': likes
      })
    })
      .then(response => {
        if (response.ok) return response.json()
      })
      .then(data => {
        // console.log(data)
        window.location.reload()
      })
  });
});



Array.from(trash).forEach(function (element) {
  element.addEventListener('click', function () {
    const name = this.closest('li').childNodes[1].innerText
    const rating = this.closest('li').childNodes[3].innerText
    const bookReport = this.closest('li').childNodes[5].innerText
    const likes = parseFloat(this.closest('li').childNodes[7].innerText)
    console.log(name)
    console.log(rating)
    console.log(bookReport)
    console.log(likes)
    fetch('messages', {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'name': name,
        'rating': rating,
        'bookReport': bookReport,
        'likes': likes
      })
    }).then(function (response) {
      window.location.reload()
    })
  });
});

let bereals = localStorage.getItem('bereals') ? JSON.parse(localStorage.getItem('bereals')) : [];
localStorage.setItem('bereals', JSON.stringify(bereals));

function addBereal(user, photo1, photo2) {
    if (!user || !photo1 || !photo2) return 'Bereal not found!';

    bereals.push({
        id: bereals.length + 1,
        user: user,
        photo1: photo1,
        photo2: photo2
    });
    localStorage.setItem('bereals', JSON.stringify(bereals));
}

function deleteBereal(id) {
    let berealIndex = getBereal(id);
    if (berealIndex == 'Bereal not found!') return 'Bereal not found!';
    bereals.splice(berealIndex, 1);
}

function getBereal(id) {
    if (id === undefined) return bereals;
    else return bereals.find(b => b.id === id) ?? 'Bereal not found!';
}
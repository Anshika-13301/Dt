// Local dynamic variable
const boardData = {
  "collapsed": [
    {
      "title": "Technical Project Management",
      "desc": "Explore project management and its techniques.",
      "tag": "Core",
      "avatars": ["A","P","M"]
    },
    {
      "title": "Thread A",
      "desc": "Discussion thread for sprint planning.",
      "tag": "Thread",
      "avatars": ["B","K","S"]
    }
  ],
  "expanded": [
    {
      "title": "Project Board - Expanded",
      "desc": "Detailed view with examples and steps.",
      "tag": "Expanded",
      "avatars": ["R","B","6"]
    },
    {
      "title": "Structure your Pointers",
      "desc": "Add notes and content for each thread and idea.",
      "tag": "Guide",
      "avatars": ["F","E","M"]
    }
  ]
};

// Colors for avatar letters
function colorFromLetter(letter){
  const colors = ['#ef4444','#f97316','#f59e0b','#10b981','#06b6d4','#3b82f6','#8b5cf6','#ec4899'];
  const idx = letter.charCodeAt(0) % colors.length;
  return colors[idx];
}

// Render function
function renderBoard(data){
  const collapsedRoot = document.getElementById('collapsed-cards');
  const expandedRoot = document.getElementById('expanded-cards');
  collapsedRoot.innerHTML = '';
  expandedRoot.innerHTML = '';

  const tpl = document.getElementById('card-template');

  // collapsed
  data.collapsed.forEach(item=>{
    const node = tpl.content.cloneNode(true);
    node.querySelector('.card-title').textContent = item.title;
    node.querySelector('.card-desc').textContent = item.desc;
    node.querySelector('.tag').textContent = item.tag;
    const avRoot = node.querySelector('.avatars');
    item.avatars.forEach(a=>{
      const span = document.createElement('span');
      span.className = 'avatar';
      span.textContent = a;
      span.style.background = colorFromLetter(a);
      avRoot.appendChild(span);
    });
    collapsedRoot.appendChild(node);
  });

  // expanded
  data.expanded.forEach(item=>{
    const node = tpl.content.cloneNode(true);
    node.querySelector('.card-title').textContent = item.title;
    node.querySelector('.card-desc').textContent = item.desc;
    node.querySelector('.tag').textContent = item.tag;
    const avRoot = node.querySelector('.avatars');
    item.avatars.forEach(a=>{
      const span = document.createElement('span');
      span.className = 'avatar';
      span.textContent = a;
      span.style.background = colorFromLetter(a);
      avRoot.appendChild(span);
    });
    expandedRoot.appendChild(node);
  });
}

// Initial render
renderBoard(boardData);

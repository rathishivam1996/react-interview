const scrollContainer = document.getElementById('scroll-container');

const dataChunkSize = 20;
// eslint-disable-next-line no-unused-vars
let dataOffset = 0;

function fetchData() {
  // simulate fetching data

  const newData = Array.from({ length: dataChunkSize }, () =>
    Math.floor(Math.random() * 100),
  );
  dataOffset += dataChunkSize;
  console.log(newData);
  console.log(dataOffset);

  return newData;
}

function appendDataToContainer(data) {
  console.log(`appending data ${data}`);
  for (let i = 0; i < data.length; i += 1) {
    const dataContainer = document.createElement('div');

    dataContainer.classList.add('data-container');
    dataContainer.textContent = data[i];

    scrollContainer.appendChild(dataContainer);
  }
}

function handleScroll() {
  console.log('scroll check');
  if (
    scrollContainer.scrollTop + scrollContainer.clientHeight >=
    scrollContainer.scrollHeight
  ) {
    console.log('scrolled');
    const newData = fetchData();
    appendDataToContainer(newData);
  }
}

const initialData = fetchData();
console.log(`initial data ${initialData}`);
appendDataToContainer(initialData);

scrollContainer.addEventListener('scroll', handleScroll);

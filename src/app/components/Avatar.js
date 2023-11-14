export default function Avatar({size}) {
    let width = 'w-12';
    if (size === 'lg') {
      width = 'w-36';
    }
  return (
<div className={`${width} rounded-full overflow-hidden`}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmGWq98WInN3n84xBnVZpwt-5qR75M6p2Er8ukXQaEvg&s"
              alt="War Chief Thrall"
            />
          </div>
  );
}
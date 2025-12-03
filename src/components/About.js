export default function About(props) {

  // Set text color for inside the paragraph
  let style = {
    // color: props.mode === 'Dark Mode' ? 'white' : 'black',
    backgroundColor: props.mode === 'Dark Mode' ? 'white' : '#041539c9',
  };


  return (
    <div className="container py-5" >
      <div className={`rounded-4 shadow-sm p-5`} style={style}>

        <h2 className="fw-bold mb-3 text-primary">About TextUtils</h2>

        <p className="fs-5" >
          TextUtils is a simple and powerful text processing tool built with React.
          It helps you analyze, transform, and manage your text with ease.
          You can count words, characters, remove spaces, convert cases, and much more.
        </p>

        <div className="mt-4">
          <h5 className="fw-semibold">Why use TextUtils?</h5>
          <ul className="mt-2">
            <li>Fast and responsive interface</li>
            <li>Works directly in your browser</li>
            <li>No installation required</li>
            <li>User-friendly and clean UI</li>
          </ul>
        </div>

      </div>
    </div>
  );
}

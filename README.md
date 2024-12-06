# A sample Blog Site
A  simple blog website where users can read and view articles using React concepts like state, props, and class components, while utilizing Bootstrap for responsive design.
![WhatsApp Image 2024-12-06 at 22 49 04_86443901](https://github.com/user-attachments/assets/59f7d142-802f-497c-8c00-e43e85a885d4)

EXPLANATION

In this project, I utilized React state, props, and class components to create a functional and dynamic website. Here's a breakdown of how each of these concepts was applied:

1. React State:
State is used to manage data that can change over time and influence the behavior of the component. In this project, the state is used in the Website component to track the current selected blog and the visibility of the gallery.

selectedBlog: This state stores the currently selected blog, allowing the app to display the full content of a blog when clicked. If no blog is selected, the app shows an overview of all the blogs.

showGallery: This state controls whether the gallery section is visible. It toggles between true and false, depending on whether the user clicks the "Gallery" link in the navigation bar. When showGallery is true, the gallery section appears, displaying images with descriptions.
The state is updated using the this.setState() method, such as when a user clicks on a blog title or toggles the gallery visibility.

2. React Props:
Props are used to pass data from parent components to child components. In this project, the Gallery component uses props to receive data such as the image (pic), title (title), and description (description) for each gallery item.

The Gallery component receives the props pic, title, and description and uses them to display a card with an image, title, and description for each item in the gallery.
These props are accessed in the Gallery component using this.props, allowing the Gallery to dynamically render different content for each item passed from the parent component.

3. Class Components:
The project primarily uses class components (e.g., Website, Gallery) to manage the state and render the UI. Class components are ideal for managing complex logic such as handling state, lifecycle methods, and event handling.

For example, the Website component is a class component that manages state and renders the blog overview and full blog content. It also contains methods like showFullBlog and backToOverview, which modify the state and dictate what content should be displayed.

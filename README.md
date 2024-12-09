Event Finder API
An API that helps users discover and manage local events such as concerts, festivals, sports games, and other gatherings. This application allows users to search for events by location, date, or category and manage them with ease.

Features
Search Events: Find events by city, date range, or category.
Add Events: Create new events with details such as name, date, location, and description.
Update Events: Modify existing event details.
Delete Events: Remove events from the database.
Swagger Documentation: Explore the API endpoints interactively.

Technologies Used
Backend: Node.js, Express.js
Database: MongoDB (via MongoDB Atlas)
Frontend: HTML, CSS, JavaScript (Optional, for basic interaction)
API Documentation: Swagger UI

Method	Endpoint	Parameters	Description
GET	/events	city, dateRange, category	Fetch events based on filters.
POST	/events	Event object	Add a new event.
PUT	/events/:eventID	Event ID, Updated fields	Update an event by its ID.
DELETE	/events/:eventID	Event ID	Delete an event by its ID.
GET	/preferences/:userID	User ID	Fetch user preferences.
POST	/preferences	Preference object	Add user preferences.
PUT	/preferences/:userID	User ID, Updated fields	Update user preferences.
DELETE	/preferences/:userID	User ID	Delete user preferences.

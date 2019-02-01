-- Seeds for Paths
INSERT INTO paths (name, description, image, createdAt, updatedAt)
VALUES ("Frontend", "Front-end web development, also known as client-side development is the practice of producing HTML, CSS and JavaScript for a website or Web Application so that a user can see and interact with them directly.", "https://i.imgur.com/TVP2v51.jpg", "2019-01-28 09:00:00", "2019-01-28 09:00:00");

INSERT INTO paths (name, description, image, createdAt, updatedAt)
VALUES ("Backend", "Back end Development refers to the server side of development where you are primarily focused on how the site works. This type of web development usually consists of three parts: a server, an application, and a database.", "https://codecondo.com/wp-content/uploads/2017/09/back-end-developer.jpg", "2019-01-28 09:00:00", "2019-01-28 09:00:00");

INSERT INTO paths (name, description, image, createdAt, updatedAt)
VALUES ("DevOps", "DevOps is the combination of cultural philosophies, practices, and tools that increases an organization’s ability to deliver applications and services at high velocity.", "https://cdn-images-1.medium.com/max/1200/1*CSZxfOMlVsKsrMkqTxFiMQ.png", "2019-01-28 09:00:00", "2019-01-28 09:00:00");


-- Seeds for Front End
INSERT INTO subjects (name, description, image, createdAt, updatedAt, pathid)
VALUES ("HTML", "HTML is really great", "https://cdn-images-1.medium.com/max/1200/1*CSZxfOMlVsKsrMkqTxFiMQ.png", "2019-01-28 09:00:00", "2019-01-28 09:00:00", 1);

INSERT INTO subjects (name, description, image, createdAt, updatedAt, pathid)
VALUES ("CSS", "CSS is annoying", "https://cdn-images-1.medium.com/max/1200/1*CSZxfOMlVsKsrMkqTxFiMQ.png", "2019-01-28 09:00:00", "2019-01-28 09:00:00", 1);

INSERT INTO subjects (name, description, image, createdAt, updatedAt, pathid)
VALUES ("Javascript", "javascript is a mixed bag", "https://cdn-images-1.medium.com/max/1200/1*CSZxfOMlVsKsrMkqTxFiMQ.png", "2019-01-28 09:00:00", "2019-01-28 09:00:00", 1);

-- Seeds for Back End
INSERT INTO subjects (name, description, image, createdAt, updatedAt, pathid)
VALUES ("Node", "Node is really great", "https://cdn-images-1.medium.com/max/1200/1*CSZxfOMlVsKsrMkqTxFiMQ.png", "2019-01-28 09:00:00", "2019-01-28 09:00:00", 2);

INSERT INTO subjects (name, description, image, createdAt, updatedAt, pathid)
VALUES ("Express", "Express is annoying", "https://cdn-images-1.medium.com/max/1200/1*CSZxfOMlVsKsrMkqTxFiMQ.png", "2019-01-28 09:00:00", "2019-01-28 09:00:00", 2);

INSERT INTO subjects (name, description, image, createdAt, updatedAt, pathid)
VALUES ("React", "React is a mixed bag", "https://cdn-images-1.medium.com/max/1200/1*CSZxfOMlVsKsrMkqTxFiMQ.png", "2019-01-28 09:00:00", "2019-01-28 09:00:00", 2);
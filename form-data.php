<?php
    // Database configuration
    $hostname = "MySQL";
    $username = "u991778039_oaksunform";
    $password = "Oaksun$2023";
    $database = "u991778039_OaksunForm";

    // Establish database connection
    $conn = mysqli_connect($hostname, $username, $password, $database);

    // Check if the connection was successful
    if (!$conn) {
        die("Database connection failed: " . mysqli_connect_error());
    }

    // Retrieve form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $contact = $_POST['contact'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    // Sanitize and validate the data (example using mysqli_real_escape_string)
    $name = mysqli_real_escape_string($conn, $name);
    $email = mysqli_real_escape_string($conn, $email);
    $contact = mysqli_real_escape_string($conn, $contact);
    $subject = mysqli_real_escape_string($conn, $subject);
    $message = mysqli_real_escape_string($conn, $message);

    // Insert data into the database
    $sql = "INSERT INTO form_data (name, email, contact, subject, message)
            VALUES ('$name', '$email', '$contact', '$subject', '$message')";

    if (mysqli_query($conn, $sql)) {
        header("Location: succesful.html");
        exit();
    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }

    // Close the database connection
    mysqli_close($conn);
    ?>
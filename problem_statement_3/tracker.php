<?php
// Start session (if needed)
session_start();

// Get current page URL
$current_page = basename($_SERVER['PHP_SELF']);

// Get current timestamp
$current_time = date("Y-m-d H:i:s");

// Store in a cookie (valid for 7 days)
setcookie("last_page", $current_page, time() + (7 * 24 * 60 * 60), "/");
setcookie("last_visit", $current_time, time() + (7 * 24 * 60 * 60), "/");

?>
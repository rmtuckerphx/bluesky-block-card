<script setup>
</script>

<template>
  <RouterView />
</template>

<style>
/* View Container */
.view-container {
  width: 100%;
  max-width: 5400px;
  margin: 0 auto;
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Form Styling */
.view-form {
  display: flex;
  flex-direction: column;
}

.view-form h2 {
  margin-bottom: 10px;
  text-align: center;
  color: #333;
}

.view-form h3 {
  margin-bottom: 30px;
  text-align: center;
  color: #333;
}

/* Button */
.btn {
  padding: 10px 15px;
  background-color: #007BFF;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-bottom: 10px;
}

.btn:hover {
  background-color: #0056b3;
}

/* Responsive Design */
@media (max-width: 480px) {
  .view-container {
    padding: 15px;
  }

  .view-form h2 {
    font-size: 1.5rem;
  }

  .view-form h3 {
    font-size: 1.0rem;
  }

  .btn {
    font-size: 14px;
  }
}
</style>

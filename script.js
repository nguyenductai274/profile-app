function openEditModal() {
    document.getElementById('editModal').style.display = 'block';
  }
  
  function closeEditModal() {
    document.getElementById('editModal').style.display = 'none';
  }
  
  function updateProfile() {
    const nameInput = document.getElementById('nameInput').value;
    const locationInput = document.getElementById('locationInput').value;
    const imageInput = document.getElementById('imageInput');
  
    if (nameInput) {
      document.getElementById('name').innerText = nameInput;
    }
  
    if (locationInput) {
      document.getElementById('location').innerText = locationInput;
    }
  
    if (imageInput.files && imageInput.files[0]) {
      const reader = new FileReader();
      reader.onload = function(e) {
        document.getElementById('avatar').src = e.target.result;
      }
      reader.readAsDataURL(imageInput.files[0]);
    }
  
    closeEditModal();
  }
  
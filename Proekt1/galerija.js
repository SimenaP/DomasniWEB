document.addEventListener('DOMContentLoaded', function() {
    
    function getRandomLikes() {
        return Math.floor(Math.random() * 21) + 5;
    }

    function addLikeCommentSection() {
        const images = document.querySelectorAll('img.mg');
        
        images.forEach((img, index) => {
            const ramka = document.createElement('div');
            ramka.className = 'photo-ramka';
            ramka.style.margin = '20px';
            ramka.style.padding = '15px';
            ramka.style.border = '2px solid #ddd';
            ramka.style.borderRadius = '10px';
            ramka.style.backgroundColor = 'white';
            ramka.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
            ramka.style.textAlign = 'center';
            ramka.style.maxWidth = '500px';
            ramka.style.marginLeft = 'auto';
            ramka.style.marginRight = 'auto';

            img.parentNode.insertBefore(ramka, img);
            ramka.appendChild(img);

            const likeSection = document.createElement('div');
            likeSection.className = 'like-section';
            likeSection.style.margin = '15px 0';
            likeSection.style.display = 'flex';
            likeSection.style.justifyContent = 'center';
            likeSection.style.alignItems = 'center';
            likeSection.style.gap = '10px';

            const likeBtn = document.createElement('button');
            likeBtn.className = 'like-btn';
            likeBtn.textContent = '👍 Лајк';
            likeBtn.style.padding = '8px 15px';
            likeBtn.style.backgroundColor = '#007bff';
            likeBtn.style.color = 'white';
            likeBtn.style.border = 'none';
            likeBtn.style.borderRadius = '20px';
            likeBtn.style.cursor = 'pointer';
            likeBtn.style.fontSize = '14px';

            const likeCount = document.createElement('span');
            likeCount.className = 'like-count';
            likeCount.textContent = `${getRandomLikes()} лајкови`;
            likeCount.style.fontWeight = 'bold';
            likeCount.style.color = '#666';

            likeSection.appendChild(likeBtn);
            likeSection.appendChild(likeCount);
            ramka.appendChild(likeSection);

            const commentSection = document.createElement('div');
            commentSection.className = 'comments-section';
            commentSection.style.marginTop = '15px';
            commentSection.style.paddingTop = '15px';
            commentSection.style.borderTop = '1px solid #eee';

            const commentInput = document.createElement('textarea');
            commentInput.className = 'comment-input';
            commentInput.placeholder = 'Додади коментар...';
            commentInput.style.width = '100%';
            commentInput.style.padding = '10px';
            commentInput.style.border = '1px solid #ddd';
            commentInput.style.borderRadius = '5px';
            commentInput.style.marginBottom = '10px';
            commentInput.style.resize = 'vertical';
            commentInput.style.minHeight = '60px';
            commentInput.style.boxSizing = 'border-box';

            const addCommentBtn = document.createElement('button');
            addCommentBtn.className = 'add-comment-btn';
            addCommentBtn.textContent = 'Додади коментар';
            addCommentBtn.style.backgroundColor = '#28a745';
            addCommentBtn.style.color = 'white';
            addCommentBtn.style.border = 'none';
            addCommentBtn.style.padding = '8px 15px';
            addCommentBtn.style.borderRadius = '5px';
            addCommentBtn.style.cursor = 'pointer';
            addCommentBtn.style.marginBottom = '15px';
            addCommentBtn.style.fontSize = '14px';

            const commentsList = document.createElement('div');
            commentsList.className = 'comments-list';
            commentsList.style.maxHeight = '150px';
            commentsList.style.overflowY = 'auto';
            commentsList.style.textAlign = 'left';

            commentSection.appendChild(commentInput);
            commentSection.appendChild(addCommentBtn);
            commentSection.appendChild(commentsList);
            ramka.appendChild(commentSection);

            likeBtn.addEventListener('click', function() {
                const currentLikes = parseInt(likeCount.textContent);
                
                if (likeBtn.classList.contains('liked')) {
                    likeBtn.classList.remove('liked');
                    likeBtn.style.backgroundColor = '#007bff';
                    likeCount.textContent = `${currentLikes - 1} лајкови`;
                } else {
                    
                    likeBtn.classList.add('liked');
                    likeBtn.style.backgroundColor = '#dc3545';
                    likeCount.textContent = `${currentLikes + 1} лајкови`;
                }
            });

            addCommentBtn.addEventListener('click', function() {
                const commentText = commentInput.value.trim();
                if (commentText) {
                    const commentElement = document.createElement('div');
                    commentElement.className = 'comment';
                    commentElement.textContent = commentText;
                    commentElement.style.backgroundColor = '#f8f9fa';
                    commentElement.style.padding = '8px 12px';
                    commentElement.style.borderRadius = '5px';
                    commentElement.style.marginBottom = '8px';
                    commentElement.style.fontSize = '14px';
                    
                    commentsList.appendChild(commentElement);
                    commentInput.value = '';
                    commentElement.scrollIntoView({ behavior: 'smooth' });
                }
            });
            commentInput.addEventListener('keypress', function(e) {
                if (e.key === 'Enter' && e.ctrlKey) {
                    e.preventDefault();
                    addCommentBtn.click();
                }
            });
        });
    }

    addLikeCommentSection();
});

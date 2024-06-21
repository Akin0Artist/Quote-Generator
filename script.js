const quotes = [
                { text: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela" },
                { text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
                { text: "Your time is limited, so don't waste it living someone else's life.", author: "Steve Jobs" },
                { text: "If life were predictable it would cease to be life, and be without flavor.", author: "Eleanor Roosevelt" },
                { text: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.", author: "Oprah Winfrey" },
                { text: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.", author: "James Cameron" },
                { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
                { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
                { text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
                { text: "Keep your eyes on the stars and your feet on the ground.", author: "Theodore Roosevelt" },
                { text: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
                { text: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
                { text: "Life is really simple, but we insist on making it complicated.", author: "Confucius" },
                { text: "May you live all the days of your life.", author: "Jonathan Swift" },
                { text: "Life itself is the most wonderful fairy tale.", author: "Hans Christian Andersen" },
                { text: "Do not take life too seriously. You will never get out of it alive.", author: "Elbert Hubbard" },
                { text: "To succeed in life, you need two things: ignorance and confidence.", author: "Mark Twain" },
                { text: "Good friends, good books, and a sleepy conscience: this is the ideal life.", author: "Mark Twain" },
                { text: "Life is made of ever so many partings welded together.", author: "Charles Dickens" },
                { text: "Life is trying things to see if they work.", author: "Ray Bradbury" },
                { text: "Your time is limited, so don't waste it living someone else's life.", author: "Steve Jobs" },
                { text: "Live in the sunshine, swim the sea, drink the wild air.", author: "Ralph Waldo Emerson" },
                { text: "The big lesson in life, baby, is never be scared of anyone or anything.", author: "Frank Sinatra" },
                { text: "Life is short, and it is up to you to make it sweet.", author: "Sarah Louise Delany" },
                { text: "You have within you right now, everything you need to deal with whatever the world can throw at you.", author: "Brian Tracy" },
                { text: "Life is ten percent what happens to us and ninety percent how we respond to it.", author: "Charles R. Swindoll" },
                { text: "Believe that life is worth living and your belief will help create the fact.", author: "William James" },
                { text: "The only impossible journey is the one you never begin.", author: "Tony Robbins" },
                { text: "In three words I can sum up everything I've learned about life: it goes on.", author: "Robert Frost" },
                { text: "Life is either a daring adventure or nothing at all.", author: "Helen Keller" },
                { text: "You only live once, but if you do it right, once is enough.", author: "Mae West" },
                { text: "Many of life's failures are people who did not realize how close they were to success when they gave up.", author: "Thomas A. Edison" },
                { text: "Curiosity about life in all of its aspects, I think, is still the secret of great creative people.", author: "Leo Burnett" },
                { text: "Life is not a problem to be solved, but a reality to be experienced.", author: "Soren Kierkegaard" },
                { text: "The unexamined life is not worth living.", author: "Socrates" },
                { text: "Turn your wounds into wisdom.", author: "Oprah Winfrey" },
                { text: "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well.", author: "Ralph Waldo Emerson" },
                { text: "The best way to predict your future is to create it.", author: "Peter Drucker" },
                { text: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky" },
                { text: "Do not go where the path may lead, go instead where there is no path and leave a trail.", author: "Ralph Waldo Emerson" },
                { text: "You must be the change you wish to see in the world.", author: "Mahatma Gandhi" },
                { text: "Act as if what you do makes a difference. It does.", author: "William James" },
                { text: "Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau" },
                { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
                { text: "It is never too late to be what you might have been.", author: "George Eliot" },
                { text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", author: "Ralph Waldo Emerson" },
                { text: "Live as if you were to die tomorrow. Learn as if you were to live forever.", author: "Mahatma Gandhi" },
                { text: "The best way to find yourself is to lose yourself in the service of others.", author: "Mahatma Gandhi" },
                { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
                { text: "If you can dream it, you can achieve it.", author: "Zig Ziglar" },
                { text: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.", author: "Albert Schweitzer" },
                { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
                { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
                { text: "The only person you are destined to become is the person you decide to be.", author: "Ralph Waldo Emerson" },
                { text: "Start where you are. Use what you have. Do what you can.", author: "Arthur Ashe" },
                { text: "Dream big and dare to fail.", author: "Norman Vaughan" },
                { text: "Act as if what you do makes a difference. It does.", author: "William James" },
                { text: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.", author: "Ralph Waldo Emerson" },
                { text: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis" },
                { text: "Success is not how high you have climbed, but how you make a positive difference to the world.", author: "Roy T. Bennett" },
                { text: "Happiness is not something ready-made. It comes from your own actions.", author: "Dalai Lama" },
                { text: "Your purpose in life is to find your purpose and give your whole heart and soul to it.", author: "Buddha" },
                { text: "The mind is everything. What you think you become.", author: "Buddha" },
                { text: "Life is a succession of lessons which must be lived to be understood.", author: "Ralph Waldo Emerson" },
                { text: "Life is like riding a bicycle. To keep your balance, you must keep moving.", author: "Albert Einstein" },
                { text: "The journey of a thousand miles begins with one step.", author: "Lao Tzu" },
                { text: "In the end, it's not the years in your life that count. It's the life in your years.", author: "Abraham Lincoln" },
                { text: "Life isn't about finding yourself. Life is about creating yourself.", author: "George Bernard Shaw" },
                { text: "Life is short, and it is up to you to make it sweet.", author: "Sarah Louise Delany" },
                { text: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
                { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
                { text: "Get busy living or get busy dying.", author: "Stephen King" },
                { text: "You have within you right now, everything you need to deal with whatever the world can throw at you.", author: "Brian Tracy" },
                { text: "The only impossible journey is the one you never begin.", author: "Tony Robbins" },
                { text: "Turn your wounds into wisdom.", author: "Oprah Winfrey" },
                { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
                { text: "Life is ten percent what happens to us and ninety percent how we respond to it.", author: "Charles R. Swindoll" },
                { text: "Your time is limited, don't waste it living someone else's life.", author: "Steve Jobs" },
                { text: "Don't judge each day by the harvest you reap but by the seeds that you plant.", author: "Robert Louis Stevenson" },
                { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
                { text: "The best way to predict your future is to create it.", author: "Peter Drucker" },
                { text: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela" },
                { text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
                { text: "In three words I can sum up everything I've learned about life: it goes on.", author: "Robert Frost" },
                { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
                { text: "Life is really simple, but we insist on making it complicated.", author: "Confucius" },
                { text: "You must be the change you wish to see in the world.", author: "Mahatma Gandhi" },
                { text: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.", author: "Oprah Winfrey" },
                { text: "If life were predictable it would cease to be life, and be without flavor.", author: "Eleanor Roosevelt" },
                { text: "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.", author: "Buddha" },
                { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
                { text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
                { text: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
                { text: "The best way to find yourself is to lose yourself in the service of others.", author: "Mahatma Gandhi" },
                { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
                { text: "The journey of a thousand miles begins with one step.", author: "Lao Tzu" },
                { text: "Life is either a daring adventure or nothing at all.", author: "Helen Keller" },
                { text: "You only live once, but if you do it right, once is enough.", author: "Mae West" },
                { text: "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well.", author: "Ralph Waldo Emerson" },
                { text: "Success is not how high you have climbed, but how you make a positive difference to the world.", author: "Roy T. Bennett" },
                { text: "Believe that life is worth living and your belief will help create the fact.", author: "William James" },
                { text: "Life isn't about finding yourself. Life is about creating yourself.", author: "George Bernard Shaw" },
                { text: "The only impossible journey is the one you never begin.", author: "Tony Robbins" },
                { text: "In the end, it's not the years in your life that count. It's the life in your years.", author: "Abraham Lincoln" },
                { text: "Dream big and dare to fail.", author: "Norman Vaughan" },
                { text: "Turn your wounds into wisdom.", author: "Oprah Winfrey" },
                { text: "Keep your eyes on the stars and your feet on the ground.", author: "Theodore Roosevelt" },
                { text: "Happiness is not something ready-made. It comes from your own actions.", author: "Dalai Lama" },
                { text: "The best way to predict your future is to create it.", author: "Peter Drucker" },
                { text: "Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau" },
                { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
                { text: "Life is not a problem to be solved, but a reality to be experienced.", author: "Soren Kierkegaard" },
                { text: "To succeed in life, you need two things: ignorance and confidence.", author: "Mark Twain" },
                { text: "Life itself is the most wonderful fairy tale.", author: "Hans Christian Andersen" },
                { text: "Life is made of ever so many partings welded together.", author: "Charles Dickens" },
                { text: "Do not take life too seriously. You will never get out of it alive.", author: "Elbert Hubbard" },
                { text: "May you live all the days of your life.", author: "Jonathan Swift" },
                { text: "Good friends, good books, and a sleepy conscience: this is the ideal life.", author: "Mark Twain" },
                { text: "Curiosity about life in all of its aspects, I think, is still the secret of great creative people.", author: "Leo Burnett" },
                { text: "You have within you right now, everything you need to deal with whatever the world can throw at you.", author: "Brian Tracy" },
                { text: "The only impossible journey is the one you never begin.", author: "Tony Robbins" },
                { text: "The unexamined life is not worth living.", author: "Socrates" },
                { text: "Live in the sunshine, swim the sea, drink the wild air.", author: "Ralph Waldo Emerson" },
                { text: "The best way to find yourself is to lose yourself in the service of others.", author: "Mahatma Gandhi" },
                { text: "Act as if what you do makes a difference. It does.", author: "William James" },
                { text: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.", author: "Albert Schweitzer" },
                { text: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky" },
                { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
                { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
                { text: "The purpose of life is to believe, to hope, and to strive.", author: "Indira Gandhi" },
                { text: "Act as if what you do makes a difference. It does.", author: "William James" },
                { text: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis" },
                { text: "The best way to find yourself is to lose yourself in the service of others.", author: "Mahatma Gandhi" },
                { text: "Life is short, and it is up to you to make it sweet.", author: "Sarah Louise Delany" },
                { text: "The only person you are destined to become is the person you decide to be.", author: "Ralph Waldo Emerson" },
                { text: "Success is not how high you have climbed, but how you make a positive difference to the world.", author: "Roy T. Bennett" },
                { text: "In three words I can sum up everything I've learned about life: it goes on.", author: "Robert Frost" },
                { text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
                { text: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela" },
                { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
                { text: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.", author: "James Cameron" },
                { text: "Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau" },
                { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
                { text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
                { text: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
                { text: "The purpose of life is to believe, to hope, and to strive.", author: "Indira Gandhi" },
                { text: "Your time is limited, don't waste it living someone else's life.", author: "Steve Jobs" },
                { text: "To succeed in life, you need two things: ignorance and confidence.", author: "Mark Twain" },
                { text: "The best way to predict your future is to create it.", author: "Peter Drucker" },
                { text: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.", author: "Albert Schweitzer" },
                { text: "In three words I can sum up everything I've learned about life: it goes on.", author: "Robert Frost" },
                { text: "The only impossible journey is the one you never begin.", author: "Tony Robbins" },
            ];

            const quoteElement = document.querySelector('.quote');
            const writerElement = document.querySelector('.writer');
            const button = document.querySelector('.Button');
            
            button.addEventListener('click', () => {
                const randomIndex = Math.floor(Math.random() * quotes.length);
                const randomQuote = quotes[randomIndex];
                quoteElement.textContent = `"${randomQuote.text}"`;
                writerElement.textContent = `- ${randomQuote.author}`;
            });

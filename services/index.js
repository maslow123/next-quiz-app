
export class Services {
    constructor(course){
        const defaultCourse = [
            {
                id: 1,
                theory: `
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                `,
                thumbnail: 'https://picsum.photos/seed/picsum/200/300',
                question: 'Manakah foto beruang?',
                options: [
                    {
                        image: 'https://picsum.photos/seed/picsum/200/300',                        
                    },
                    {
                        image: 'https://picsum.photos/seed/picsum/200/300',                        
                    },
                    {
                        image: 'https://picsum.photos/seed/picsum/200/300',                        
                    },
                    {
                        image: 'https://cdn3.vectorstock.com/i/1000x1000/37/37/simple-cartoon-of-a-cute-bear-vector-18823737.jpg',
                    }
                ],
                correct_answer: 3,
                user_answer: null,
                counter: 3,
                score: 0
            },
            {
                id: 2,
                theory: `
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                `,
                thumbnail: 'https://picsum.photos/seed/picsum/200/300',
                question: '2. Manakah foto beruang?',
                options: [
                    {
                        image: 'https://picsum.photos/seed/picsum/200/300',                        
                    },
                    {
                        image: 'https://picsum.photos/seed/picsum/200/300',                        
                    },
                    {
                        image: 'https://picsum.photos/seed/picsum/200/300',                        
                    },
                    {
                        image: 'https://cdn3.vectorstock.com/i/1000x1000/37/37/simple-cartoon-of-a-cute-bear-vector-18823737.jpg',
                    }
                ],
                correct_answer: 3,
                user_answer: null,
                counter: 3,
                score: 0
            }
        ]; 

        this.course = course || defaultCourse;
    }

    
    getAllCourse = () => {
        return this.course;
    };   
    
    getCourseById = (id) => {
        const course = this.course.find(item => item.id === id);
        return course;
    }

    updateCourse = (course) => {   
        for(let i in this.course) {
            const c = this.course[i];
            if (c.id === course.id) {
                this.course[i] = course;
            }
        }

        return {
            allCourse: [...this.course]
        }
    }

    getScore = () => {
        const score = this.course.map(course => course.score).reduce((acc, a) => acc + a);
        return score;
    }
};
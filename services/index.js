import { images } from "../utils";

export class Services {
    constructor(course){
        const defaultCourse = [
            {
                id: 1,
                theory: `
                    Komputer adalah sebuah benda elektronik yang bisa melakukan berbagai tugas, seperti menerima input dan memprosesnya sesuai dengan perintah, menyimpan berbagai perintah dan mengelola hasilnya, 
                    serta menyediakan hasilnya dalam bentuk informasi yang lengkap.
                `,
                thumbnail: images.questions.computer,
                question: 'Dibawah ini manakah gambar dari Komputer yang benar?',
                options: [
                    {
                        image: images.questions.computer,                        
                    },
                    {
                        image: images.questions.motherboard,                        
                    },
                    {
                        image: images.questions.processor,                        
                    }
                ],
                correct_answer: 0,
                user_answer: null,
                counter: 2,
                score: 0
            },
            {
                id: 2,
                theory: `
                    Motherboard merupakan papan sirkuit yang menjadi rumah bagi komponen komputer seperti RAM, hard disk, 
                    dan prosesor yang saling terhubung.
                `,
                thumbnail: images.questions.motherboard,
                question: 'Manakah yang benar, nama dari perangkat keras komputer di atas!',
                options: [                    
                    {
                        image: images.word.ram,                        
                    },
                    {
                        image: images.word.processor,                        
                    },
                    {
                        image: images.word.motherboard,                        
                    }
                ],
                correct_answer: 2,
                user_answer: null,
                counter: 2,
                score: 0
            },
            {
                id: 3,
                theory: `
                    CPU (Central Processing Unit) atau prosesor yaitu tempat komputer berpikir dan merupakan bagian utama untuk menggerakan komputer.
                `,
                thumbnail: images.questions.processor,
                question: 'Dibawah ini manakah gambar dari CPU (Central Processing Unit) yang benar?',
                options: [
                    {
                        image: images.questions.hardisk,                        
                    },
                    {
                        image: images.questions.processor,                        
                    },
                    {
                        image: images.questions.monitor,                        
                    }
                ],
                correct_answer: 1,
                user_answer: null,
                counter: 2,
                score: 0
            },
            {
                id: 4,
                theory: `
                    RAM (Random Access Memory) berfungsi menyimpan semua intruksi dari prosesor agar komputer bisa bekerja dengan cepat.
                `,
                thumbnail: images.questions.ram,
                question: 'Manakah yang benar, nama dari perangkat keras komputer di atas!',
                options: [
                    {
                        image: images.word.ram,                        
                    },
                    {
                        image: images.word.monitor,                        
                    },
                    {
                        image: images.word.hardisk,                        
                    }
                ],
                correct_answer: 0,
                user_answer: null,
                counter: 2,
                score: 0
            },
            {
                id: 5,
                theory: `
                    Hard Disk yaitu perangkat keras komputer yang memiliki fungsi sebagai media penyimpanan data di komputer.
                `,
                thumbnail: images.questions.hardisk,
                question: 'Di bawah ini manakah gambar dari Hard Disk yang benar?',
                options: [
                    {
                        image: images.questions.keyboard,                        
                    },
                    {
                        image: images.questions.hardisk,                        
                    },
                    {
                        image: images.questions.motherboard,                        
                    }
                ],
                correct_answer: 1,
                user_answer: null,
                counter: 2,
                score: 0
            },
            {
                id: 6,
                theory: `
                    Monitor merupakan tempat dimana kita bisa melihat suatu ekspresi apa yang di maksud oleh komputer
                `,
                thumbnail: images.questions.monitor,
                question: 'Manakah yang benar, nama dari perangkat keras komputer di atas!',
                options: [
                    {
                        image: images.word.power_supply,                        
                    },
                    {
                        image: images.word.monitor,                        
                    },
                    {
                        image: images.word.webcam,                        
                    }
                ],
                correct_answer: 1,
                user_answer: null,
                counter: 2,
                score: 0
            },
            {
                id: 7,
                theory: `
                    Power Supply berfungsi untuk menyalurkan listrik kedalam seluruh komponen komputer agar komputer bisa hidup dan digunakan.
                `,
                thumbnail: images.questions.power_supply,
                question: 'Di bawah ini manakah gambar dari Power Supply yang benar?',
                options: [
                    {
                        image: images.questions.speaker,                        
                    },
                    {
                        image: images.questions.power_supply,                        
                    },
                    {
                        image: images.questions.processor,                        
                    }
                ],
                correct_answer: 1,
                user_answer: null,
                counter: 2,
                score: 0
            },
            {
                id: 8,
                theory: `
                    Keyboard yang fungsinya seperti tangan manusia yang merupakan sarana komputer untuk berinteraksi dan melakukan suatu pekerjaan,
                `,
                thumbnail: images.questions.keyboard,
                question: 'Manakah yang benar, nama dari perangkat keras komputer di atas!',
                options: [
                    {
                        image: images.word.webcam,                        
                    },
                    {
                        image: images.word.speaker,                        
                    },
                    {
                        image: images.word.keyboard,                        
                    }
                ],
                correct_answer: 2,
                user_answer: null,
                counter: 2,
                score: 0
            },
            {
                id: 9,
                theory: `
                    Mouse yang fungsinya seperti jari manusia, dapat digunakan untuk mengambil dan memilih sesuatu yang kita inginkan.
                `,
                thumbnail: images.questions.mouse,
                question: 'Di bawah ini manakah gambar dari Mouse yang benar?',
                options: [
                    {
                        image: images.questions.mouse,                        
                    },
                    {
                        image: images.questions.keyboard,                        
                    },
                    {
                        image: images.questions.speaker,                        
                    }
                ],
                correct_answer: 0,
                user_answer: null,
                counter: 2,
                score: 0
            },
            {
                id: 10,
                theory: `
                    Speaker adalah tempat dimana komputer bisa mengeluarkan suara agar dapat di dengar oleh kita.
                `,
                thumbnail: images.questions.speaker,
                question: 'Manakah yang benar, nama dari perangkat keras komputer di atas!',
                options: [
                    {
                        image: images.word.webcam,                        
                    },
                    {
                        image: images.word.speaker,                        
                    },
                    {
                        image: images.word.mouse,                        
                    }
                ],
                correct_answer: 1,
                user_answer: null,
                counter: 2,
                score: 0
            },
            {
                id: 11,
                theory: `
                    Webcam fungsinya sama seperti mata, yaitu untuk melihat dan menangkap gambar.
                `,
                thumbnail: images.questions.webcam,
                question: 'Di bawah ini manakah gambar dari Webcam yang benar?',
                options: [
                    {
                        image: images.questions.webcam,                        
                    },
                    {
                        image: images.questions.power_supply,                        
                    },
                    {
                        image: images.questions.hardisk,                        
                    }
                ],
                correct_answer: 0,
                user_answer: null,
                counter: 2,
                score: 0
            },
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

    completedAllCourse = () => {
        const course = this.course.filter(course => course.user_answer === null);
        return course.length < 1;
    }
};
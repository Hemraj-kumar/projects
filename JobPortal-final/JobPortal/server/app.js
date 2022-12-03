const io = require('socket.io')(5000 , {
    cors : {
        origin : ['http://localhost:3000' , 'http://localhost:4000'],
    }
})

const mongoose = require('mongoose');
const date = require('date-and-time');

mongoose.connect('mongodb+srv://admin:O4ipkQuKx6tHE806@cluster0.6m0xwm9.mongodb.net/?retryWrites=true&w=majority' ,
{useNewUrlParser: true}
)
    .then(()=>console.log('Database connected!!!'))
    .catch((err)=>console.log(err))

const Application = require('./models/applications');
const Post = require('./models/Posts');

io.on('connection' , (socket)=>{
    console.log('Got a client with id : '+socket.id);
    
    socket.on('addPost' , async(obj , cb)=>{
        const now = new Date();
        const post =new Post( {
            company_name : obj.company_name,
            date : date.format(now , 'YYYY-MM-DD'),
            content : obj.content,
            desc : obj.desc,
            features : obj.features,
            applications_count : 0
        } )

        var res = await post.save();
        res.id = res.__id+'';
        cb('Sucessyfully Posted');
        io.emit('gotPost', res)
    })

    
    socket.on('addApplication' , async(obj , cb)=>{  
        const application = new Application(
            {
                post_id : obj.post_id,
                name : obj.name,
                qualification : obj.qualification,
                phno : obj.phno,
                dob : obj.dob,
                address : obj.address,
                university : obj.university,
                skills : obj.skills,
                experience : obj.experience,
                achivements : obj.achivements,
                mail : obj.mail,
                linkedin : obj.linkedin
            }
        )
        
        const res = await application.save();
        res.id = res.__id + '';
        
        const res2 = await Post.findByIdAndUpdate(
            obj.post_id, 
            {
                $inc : {'applications_count' : 1}
            },
            { new : true }
        )

        res2.post_id = res2.__id + '';

        const emitUrl = obj.post_id + '/applicationCountChanged'
        io.emit( emitUrl , res2)
        io.emit( obj.post_id + '/gotApplication' , res )
       
        cb('Applied Sucessfully!!');
    })

    socket.on('getPosts' , async(cb)=>{
        const res = await Post.find();
        cb(res)
    })

    socket.on('getApplications' , async(obj , cb)=>{
        const res = await Application.find({ post_id : obj.post_id } );
        // console.log(res)
        cb(res)
    })

})

import tmi from 'tmi.js';

const opts = {
    identity: {
        username: 'layamal',
        password: 'oauth:nzje9lawd3sfxa4w8pvcgx0lamjako'
    },
    channels: [
        'layamal'
    ]
    
}

const client = new tmi.client(opts);


client.on('connected', (addres, port)=>{
    client.say(opts.channels[0], 'Chompito')
    console.log(`Bot listening at ${addres}:${port}`);
});

client.on('message', (target, ctx, msg) =>{
    if (msg === '!Hola')
    {
        client.say(target, 'Bienvenido al stream amigo');
    }
});
client.connect();
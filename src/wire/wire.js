import { register, ValueChangedEvent } from '@lwc/wire-service';

export const customWire = () => {}

register(customWire, (eventTarget) => {
  eventTarget.addEventListener('config', (config) => {
    console.log('config from LWC component', config);
  })
  
  eventTarget.addEventListener('disconnect', (config) => {
    console.log('component disconnected');
    
    const result = {
      hello: 'world',
    };
    const event = new ValueChangedEvent({ data: result });
    eventTarget.dispatchEvent(event);
  })
});
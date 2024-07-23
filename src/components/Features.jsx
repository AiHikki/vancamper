import Category from './Category';
import BookCamperForm from './BookCamperForm';
import { addSpace } from '../utils';

const Features = ({
  features: {
    details,
    engine,
    transmission,
    length,
    width,
    tank,
    height,
    consumption,
    form,
    adults,
  },
}) => {
  return (
    <div className="flex gap-6 mt-11" id="features">
      <div>
        <ul className="flex flex-wrap gap-2">
          <Category icon="adults" title={`${adults} adults`} />
          <Category icon="transmission" title={transmission} />

          <Category icon="petrol" title={engine} />
          {Boolean(details.kitchen) && <Category icon="kitchen" title="kitchen" />}
          {Boolean(details.airConditioner) && (
            <Category icon="airConditioner" title={`${details.airConditioner} air conditioner`} />
          )}
          {Boolean(details.beds) && <Category icon="beds" title={`${details.beds} beds`} />}
          {Boolean(details.CD) && <Category icon="CD" title="CD" />}
          {Boolean(details.radio) && <Category icon="radio" title="radio" />}
          {Boolean(details.hob) && <Category icon="hob" title={`${details.hob} hob`} />}
        </ul>

        <div className="mt-11">
          <p className="mb-6 text-primary font-semibold text-xl">Vehicle details</p>
          <hr />
          <div className="mt-6 flex flex-col gap-[14px]">
            <div className="flex justify-between items-center">
              <span>Form</span>
              <span>
                {form === 'fullyIntegrated'
                  ? 'Fully Integrated'
                  : form === 'panelTruck'
                  ? 'Panel Truck'
                  : form === 'alcove'
                  ? 'Alcove'
                  : ''}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span>Length</span>
              <span>{addSpace(length, 'm')}</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Width</span>
              <span>{addSpace(width, 'm')}</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Height</span>
              <span>{addSpace(height, 'm')}</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Tank</span>
              <span>{addSpace(tank, 'l')}</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Consumption</span>
              <span>{consumption}</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <BookCamperForm />
      </div>
    </div>
  );
};

export default Features;

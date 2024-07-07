import { useId } from 'react';
import icons from '../assets/icons.svg';
import { Formik, Field, Form } from 'formik';
import CustomButton from '../components/CustomButton';
import { useDispatch } from 'react-redux';
import { updateFilters } from '../redux/filters/slice';

const FiltersForm = () => {
  const dispatch = useDispatch();
  const locationInputId = useId();

  const handleSubmit = values => {
    dispatch(updateFilters(values));
    alert("Oops... it's not working yet");
  };
  return (
    <>
      <Formik
        initialValues={{
          location: '',
          equipment: [],
          vehicleType: [],
        }}
        onSubmit={handleSubmit}
      >
        <Form autoComplete="off">
          <div className="mb-8">
            <label
              htmlFor={locationInputId}
              className="mb-2 text-base font-medium text-primary text-opacity-60 block"
            >
              Location
            </label>

            <div className="relative">
              <Field
                as="input"
                type="text"
                name="location"
                className="location_input"
                placeholder="City"
                id={locationInputId}
              />
              <svg className="w-[18px] h-5 absolute top-[50%] translate-y-[-50%] left-[18px] text-primary">
                <use href={`${icons}#map-pin`}></use>
              </svg>
            </div>
          </div>

          <p className="text-slate-blue font-medium text-base mb-[14px]">Filters</p>
          <div className="mb-8">
            <p className="text-primary font-semibold text-xl mb-6">Vehicle equipment</p>
            <hr className="mb-6" />

            <div role="group" aria-labelledby="checkbox-group" className="flex flex-wrap gap-2">
              <label className="custom_checkbox">
                <Field
                  type="checkbox"
                  name="equipment"
                  value="airConditioner"
                  className="hidden peer"
                />
                <div className="checkbox_border"></div>
                <svg className="w-8 h-8">
                  <use href={`${icons}#airConditioner`}></use>
                </svg>
                <span className="checkbox_label">AC</span>
              </label>

              <label className="custom_checkbox">
                <Field type="checkbox" name="equipment" value="automatic" className="hidden peer" />
                <div className="checkbox_border"></div>

                <svg className="w-8 h-8">
                  <use href={`${icons}#transmission`}></use>
                </svg>
                <span className="checkbox_label">Automatic</span>
              </label>

              <label className="custom_checkbox">
                <Field type="checkbox" name="equipment" value="kitchen" className="hidden peer" />
                <div className="checkbox_border"></div>

                <svg className="w-8 h-8">
                  <use href={`${icons}#kitchen`}></use>
                </svg>
                <span className="checkbox_label">Kitchen</span>
              </label>

              <label className="custom_checkbox">
                <Field type="checkbox" name="equipment" value="TV" className="hidden peer" />
                <div className="checkbox_border"></div>

                <svg className="w-8 h-8">
                  <use href={`${icons}#TV`}></use>
                </svg>
                <span className="checkbox_label">TV</span>
              </label>

              <label className="custom_checkbox">
                <Field type="checkbox" name="equipment" value="bathroom" className="hidden peer" />
                <div className="checkbox_border"></div>
                <svg className="w-8 h-8">
                  <use href={`${icons}#shower`}></use>
                </svg>
                <span className="checkbox_label">Shower/WC</span>
              </label>
            </div>
          </div>

          <div className="mb-16">
            <p className="text-primary font-semibold text-xl mb-6">Vehicle type</p>
            <hr className="mb-6" />

            <div role="group" aria-labelledby="checkbox-group" className="flex flex-wrap gap-2">
              <label className="custom_checkbox">
                <Field type="radio" name="vehicleType" value="panelTruck" className="hidden peer" />
                <div className="checkbox_border"></div>
                <svg className="w-8 h-8">
                  <use href={`${icons}#van`}></use>
                </svg>
                <span className="checkbox_label">Van</span>
              </label>

              <label className="custom_checkbox">
                <Field
                  type="radio"
                  name="vehicleType"
                  value="fullyIntegrated"
                  className="hidden peer"
                />
                <div className="checkbox_border"></div>

                <svg className="w-8 h-8">
                  <use href={`${icons}#fully-integrated-camper`}></use>
                </svg>
                <span className="checkbox_label">Fully Integrated</span>
              </label>

              <label className="custom_checkbox">
                <Field type="radio" name="vehicleType" value="alcove" className="hidden peer" />
                <div className="checkbox_border"></div>

                <svg className="w-8 h-8">
                  <use href={`${icons}#alcove`}></use>
                </svg>
                <span className="checkbox_label">Alcove</span>
              </label>
            </div>
          </div>

          <CustomButton type="submit" otherStyles="px-[60px]">
            Search
          </CustomButton>
        </Form>
      </Formik>
    </>
  );
};

export default FiltersForm;

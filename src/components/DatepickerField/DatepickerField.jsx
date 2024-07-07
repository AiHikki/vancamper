import Datepicker from 'react-datepicker';
import { LuCalendar } from 'react-icons/lu';
import 'react-datepicker/dist/react-datepicker.css';
import './DatepickerField.css'; // Custom styles

const DatepickerField = ({ field, form, ...props }) => (
  <div className="relative">
    <Datepicker
      dateFormat="dd/MM/yyyy"
      {...field}
      selected={field.value}
      onChange={val => form.setFieldValue(field.name, val)}
      toggleCalendarOnIconClick
      customInput={
        <label className="relative">
          <input className="form_input" placeholder="Booking date" />
          <LuCalendar
            size={20}
            color="#101828"
            className="absolute top-[50%] translate-y-[-50%] right-[18px]"
          />
        </label>
      }
      calendarClassName="custom-calendar" // Apply custom styles to calendar
    />
  </div>
);

export default DatepickerField;

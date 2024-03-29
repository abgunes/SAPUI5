
// ---- sap.ui.unified --------------------------------------------------------------------------


// ---- sap.ui.unified.Calendar --------------------------------------------------------------------------

/**
 * Constructor for a new Calendar.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getIntervalSelection intervalSelection} : boolean (default: false)</li>
 * <li>{@link #getSingleSelection singleSelection} : boolean (default: true)</li>
 * <li>{@link #getMonths months} : int (default: 1)</li>
 * <li>{@link #getFirstDayOfWeek firstDayOfWeek} : int (default: -1)</li>
 * <li>{@link #getNonWorkingDays nonWorkingDays} : int[]</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getSelectedDates selectedDates} : sap.ui.unified.DateRange[]</li>
 * <li>{@link #getSpecialDates specialDates} : sap.ui.unified.DateTypeRange[]</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:select select} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:cancel cancel} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Basic Calendar.
 * This calendar is used for DatePickers
 * @extends sap.ui.core.Control
 * @version 1.32.7
 * @constructor
 * @public
 * @since 1.22.0
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.unified.Calendar = function(sId,mSettings) {};
/**
 * Date selection was cancelled
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.unified.Calendar.prototype.cancel = function(oControlEvent) {  };

/**
 * Date selection changed
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.unified.Calendar.prototype.select = function(oControlEvent) {  };

/**
 * Adds some ariaLabelledBy into the association named <code>ariaLabelledBy</code>.
 * @param {string | sap.ui.core.Control} vAriaLabelledBy the ariaLabelledBy to add; if empty, nothing is inserted
 * @returns {sap.ui.unified.Calendar} Reference to <code>this</code> in order to allow method chaining
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.unified.Calendar.prototype.addAriaLabelledBy = function(vAriaLabelledBy) { return new sap.ui.unified.Calendar(); };

/**
 * Adds some selectedDate into the aggregation named <code>selectedDates</code>.
 * @param {sap.ui.unified.DateRange}
 *            oSelectedDate the selectedDate to add; to add; if empty, nothing is inserted
 * @returns {sap.ui.unified.Calendar} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.Calendar.prototype.addSelectedDate = function(oSelectedDate) { return new sap.ui.unified.Calendar(); };

/**
 * Adds some specialDate into the aggregation named <code>specialDates</code>.
 * @param {sap.ui.unified.DateTypeRange}
 *            oSpecialDate the specialDate to add; to add; if empty, nothing is inserted
 * @returns {sap.ui.unified.Calendar} Reference to <code>this</code> in order to allow method chaining
 * @since 1.24.0
 * @public
 * 
 */
sap.ui.unified.Calendar.prototype.addSpecialDate = function(oSpecialDate) { return new sap.ui.unified.Calendar(); };

/**
 * Attaches event handler <code>fnFunction</code> to the 'cancel' event of this <code>sap.ui.unified.Calendar</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise it will be bound to this <code>sap.ui.unified.Calendar</code> itself.
 * 
 * Date selection was cancelled
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to be called when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.unified.Calendar</code> itself.
 * @returns {sap.ui.unified.Calendar} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.Calendar.prototype.attachCancel = function(oData,fnFunction,oListener) { return new sap.ui.unified.Calendar(); };

/**
 * Attaches event handler <code>fnFunction</code> to the 'select' event of this <code>sap.ui.unified.Calendar</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise it will be bound to this <code>sap.ui.unified.Calendar</code> itself.
 * 
 * Date selection changed
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to be called when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.unified.Calendar</code> itself.
 * @returns {sap.ui.unified.Calendar} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.Calendar.prototype.attachSelect = function(oData,fnFunction,oListener) { return new sap.ui.unified.Calendar(); };

/**
 * Destroys all the selectedDates in the aggregation
 * named <code>selectedDates</code>.
 * @returns {sap.ui.unified.Calendar} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.Calendar.prototype.destroySelectedDates = function() { return new sap.ui.unified.Calendar(); };

/**
 * Destroys all the specialDates in the aggregation
 * named <code>specialDates</code>.
 * @returns {sap.ui.unified.Calendar} Reference to <code>this</code> in order to allow method chaining
 * @since 1.24.0
 * @public
 * 
 */
sap.ui.unified.Calendar.prototype.destroySpecialDates = function() { return new sap.ui.unified.Calendar(); };

/**
 * Detaches event handler <code>fnFunction</code> from the 'cancel' event of this <code>sap.ui.unified.Calendar</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @returns {sap.ui.unified.Calendar} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.Calendar.prototype.detachCancel = function(fnFunction,oListener) { return new sap.ui.unified.Calendar(); };

/**
 * Detaches event handler <code>fnFunction</code> from the 'select' event of this <code>sap.ui.unified.Calendar</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @returns {sap.ui.unified.Calendar} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.Calendar.prototype.detachSelect = function(fnFunction,oListener) { return new sap.ui.unified.Calendar(); };

/**
 * Displays a date in the calendar but don't set the focus.
 * @param {object} oDate
 *         JavaScript date object for focused date.
 * @returns {sap.ui.unified.Calendar} <code>this</code> to allow method chaining
 * @since 1.28.0
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.unified.Calendar.prototype.displayDate = function(oDate) { return new sap.ui.unified.Calendar(); };

/**
 * Creates a new subclass of class sap.ui.unified.Calendar with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object. If not given, it defaults to <code>sap.ui.core.ElementMetadata</code>.
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.unified.Calendar.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event cancel to attached listeners.
 * @param {Map} [mArguments] The arguments to pass along with the event.
 * @returns {sap.ui.unified.Calendar} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.unified.Calendar.prototype.fireCancel = function(mArguments) { return new sap.ui.unified.Calendar(); };

/**
 * Fires event select to attached listeners.
 * @param {Map} [mArguments] The arguments to pass along with the event.
 * @returns {sap.ui.unified.Calendar} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.unified.Calendar.prototype.fireSelect = function(mArguments) { return new sap.ui.unified.Calendar(); };

/**
 * Sets the focused date of the calendar.
 * @param {object} oDate
 *         JavaScript date object for focused date.
 * @returns {sap.ui.unified.Calendar} <code>this</code> to allow method chaining
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.unified.Calendar.prototype.focusDate = function(oDate) { return new sap.ui.unified.Calendar(); };

/**
 * Returns array of IDs of the elements which are the current targets of the <code>ariaLabelledBy</code> association.
 * 
 * Association to controls / ids which label this control (see WAI-ARIA attribute aria-labelledby).
 * @returns {sap.ui.core.Control[]}
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.unified.Calendar.prototype.getAriaLabelledBy = function() { return new Array(); };

/**
 * Gets current value of property <code>firstDayOfWeek</code>.
 * 
 * If set, the first day of the displayed week is this day. Valid values are 0 to 6.
 * If not a valid value is set, the default of the used locale is used.
 * 
 * Default value is <code>-1</code>.
 * @returns {int} Value of property <code>firstDayOfWeek</code>
 * @since 1.28.9
 * @public
 * 
 */
sap.ui.unified.Calendar.prototype.getFirstDayOfWeek = function() { return 0; };

/**
 * Gets current value of property <code>intervalSelection</code>.
 * 
 * If set, interval selection is allowed
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>intervalSelection</code>
 * @public
 * 
 */
sap.ui.unified.Calendar.prototype.getIntervalSelection = function() { return false; };

/**
 * Returns a metadata object for class sap.ui.unified.Calendar.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.unified.Calendar.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property <code>months</code>.
 * 
 * number of months displayed
 * on phones always only one month is displayed
 * 
 * Default value is <code>1</code>.
 * @returns {int} Value of property <code>months</code>
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.unified.Calendar.prototype.getMonths = function() { return 0; };

/**
 * Gets current value of property <code>nonWorkingDays</code>.
 * 
 * If set, the provided weekdays are displayed as non-working days.
 * Valid values inside the array are 0 to 6.
 * If not set, the weekend defined in the locale settings is displayed as non-working days.
 * @returns {int[]} Value of property <code>nonWorkingDays</code>
 * @since 1.28.9
 * @public
 * 
 */
sap.ui.unified.Calendar.prototype.getNonWorkingDays = function() { return new Array(); };

/**
 * Gets content of aggregation <code>selectedDates</code>.
 * 
 * Date Ranges for selected dates of the DatePicker
 * @returns {sap.ui.unified.DateRange[]}
 * @public
 * 
 */
sap.ui.unified.Calendar.prototype.getSelectedDates = function() { return new Array(); };

/**
 * Gets current value of property <code>singleSelection</code>.
 * 
 * If set, only a single date or interval, if intervalSelection is enabled, can be selected
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>singleSelection</code>
 * @public
 * 
 */
sap.ui.unified.Calendar.prototype.getSingleSelection = function() { return false; };

/**
 * Gets content of aggregation <code>specialDates</code>.
 * 
 * Date Range with type to visualize special days in the Calendar.
 * If one day is assigned to more than one Type, only the first one will be used.
 * @returns {sap.ui.unified.DateTypeRange[]}
 * @since 1.24.0
 * @public
 * 
 */
sap.ui.unified.Calendar.prototype.getSpecialDates = function() { return new Array(); };

/**
 * Checks for the provided <code>sap.ui.unified.DateRange</code> in the aggregation named <code>selectedDates</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.unified.DateRange}
 *           oSelectedDate The selectedDate whose index is looked for.
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.unified.Calendar.prototype.indexOfSelectedDate = function(oSelectedDate) { return 0; };

/**
 * Checks for the provided <code>sap.ui.unified.DateTypeRange</code> in the aggregation named <code>specialDates</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.unified.DateTypeRange}
 *           oSpecialDate The specialDate whose index is looked for.
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * @since 1.24.0
 * @public
 * 
 */
sap.ui.unified.Calendar.prototype.indexOfSpecialDate = function(oSpecialDate) { return 0; };

/**
 * Inserts a selectedDate into the aggregation named <code>selectedDates</code>.
 * @param {sap.ui.unified.DateRange}
 *            oSelectedDate the selectedDate to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the selectedDate should be inserted at; for
 *              a negative value of <code>iIndex</code>, the selectedDate is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the selectedDate is inserted at
 *              the last position
 * @returns {sap.ui.unified.Calendar} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.Calendar.prototype.insertSelectedDate = function(oSelectedDate,iIndex) { return new sap.ui.unified.Calendar(); };

/**
 * Inserts a specialDate into the aggregation named <code>specialDates</code>.
 * @param {sap.ui.unified.DateTypeRange}
 *            oSpecialDate the specialDate to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the specialDate should be inserted at; for
 *              a negative value of <code>iIndex</code>, the specialDate is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the specialDate is inserted at
 *              the last position
 * @returns {sap.ui.unified.Calendar} Reference to <code>this</code> in order to allow method chaining
 * @since 1.24.0
 * @public
 * 
 */
sap.ui.unified.Calendar.prototype.insertSpecialDate = function(oSpecialDate,iIndex) { return new sap.ui.unified.Calendar(); };

/**
 * Removes all the controls in the association named <code>ariaLabelledBy</code>.
 * @returns {sap.ui.core.Control[]} An array of the removed elements (might be empty)
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.unified.Calendar.prototype.removeAllAriaLabelledBy = function() { return new Array(); };

/**
 * Removes all the controls in the aggregation named <code>selectedDates</code>.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.unified.DateRange[]} An array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.unified.Calendar.prototype.removeAllSelectedDates = function() { return new Array(); };

/**
 * Removes all the controls in the aggregation named <code>specialDates</code>.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.unified.DateTypeRange[]} An array of the removed elements (might be empty)
 * @since 1.24.0
 * @public
 * 
 */
sap.ui.unified.Calendar.prototype.removeAllSpecialDates = function() { return new Array(); };

/**
 * Removes an ariaLabelledBy from the association named <code>ariaLabelledBy</code>.
 * @param {int | string | sap.ui.core.Control} vAriaLabelledBy The ariaLabelledByto be removed or its index or ID
 * @returns {sap.ui.core.Control} the removed ariaLabelledBy or <code>null</code>
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.unified.Calendar.prototype.removeAriaLabelledBy = function(vAriaLabelledBy) { return new sap.ui.core.Control(); };

/**
 * Removes a selectedDate from the aggregation named <code>selectedDates</code>.
 * @param {int | string | sap.ui.unified.DateRange} vSelectedDate The selectedDateto remove or its index or id
 * @returns {sap.ui.unified.DateRange} The removed selectedDate or <code>null</code>
 * @public
 * 
 */
sap.ui.unified.Calendar.prototype.removeSelectedDate = function(vSelectedDate) { return new sap.ui.unified.DateRange(); };

/**
 * Removes a specialDate from the aggregation named <code>specialDates</code>.
 * @param {int | string | sap.ui.unified.DateTypeRange} vSpecialDate The specialDateto remove or its index or id
 * @returns {sap.ui.unified.DateTypeRange} The removed specialDate or <code>null</code>
 * @since 1.24.0
 * @public
 * 
 */
sap.ui.unified.Calendar.prototype.removeSpecialDate = function(vSpecialDate) { return new sap.ui.unified.DateTypeRange(); };

/**
 * Sets a new value for property <code>firstDayOfWeek</code>.
 * 
 * If set, the first day of the displayed week is this day. Valid values are 0 to 6.
 * If not a valid value is set, the default of the used locale is used.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>-1</code>.
 * @param {int} iFirstDayOfWeek New value for property <code>firstDayOfWeek</code>
 * @returns {sap.ui.unified.Calendar} Reference to <code>this</code> in order to allow method chaining
 * @since 1.28.9
 * @public
 * 
 */
sap.ui.unified.Calendar.prototype.setFirstDayOfWeek = function(iFirstDayOfWeek) { return new sap.ui.unified.Calendar(); };

/**
 * Sets a new value for property <code>intervalSelection</code>.
 * 
 * If set, interval selection is allowed
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bIntervalSelection New value for property <code>intervalSelection</code>
 * @returns {sap.ui.unified.Calendar} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.Calendar.prototype.setIntervalSelection = function(bIntervalSelection) { return new sap.ui.unified.Calendar(); };

/**
 * Sets a new value for property <code>months</code>.
 * 
 * number of months displayed
 * on phones always only one month is displayed
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>1</code>.
 * @param {int} iMonths New value for property <code>months</code>
 * @returns {sap.ui.unified.Calendar} Reference to <code>this</code> in order to allow method chaining
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.unified.Calendar.prototype.setMonths = function(iMonths) { return new sap.ui.unified.Calendar(); };

/**
 * Sets a new value for property <code>nonWorkingDays</code>.
 * 
 * If set, the provided weekdays are displayed as non-working days.
 * Valid values inside the array are 0 to 6.
 * If not set, the weekend defined in the locale settings is displayed as non-working days.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {int[]} sNonWorkingDays New value for property <code>nonWorkingDays</code>
 * @returns {sap.ui.unified.Calendar} Reference to <code>this</code> in order to allow method chaining
 * @since 1.28.9
 * @public
 * 
 */
sap.ui.unified.Calendar.prototype.setNonWorkingDays = function(sNonWorkingDays) { return new sap.ui.unified.Calendar(); };

/**
 * Sets a new value for property <code>singleSelection</code>.
 * 
 * If set, only a single date or interval, if intervalSelection is enabled, can be selected
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bSingleSelection New value for property <code>singleSelection</code>
 * @returns {sap.ui.unified.Calendar} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.Calendar.prototype.setSingleSelection = function(bSingleSelection) { return new sap.ui.unified.Calendar(); };


// ---- sap.ui.unified.calendar --------------------------------------------------------------------------


// ---- sap.ui.unified.calendar.DatesRow --------------------------------------------------------------------------

/**
 * Constructor for a new calendar/DatesRow.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getStartDate startDate} : object</li>
 * <li>{@link #getDays days} : int (default: 7)</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.unified.calendar.Month#constructor sap.ui.unified.calendar.Month}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * renders a row of days with ItemNavigation
 * This is used inside the calendar. Not for stand alone usage
 * If used inside the calendar the properties and aggregation are directly taken from the parent
 * (To not duplicate and sync DateRanges and so on...)
 * @extends sap.ui.unified.calendar.Month
 * @version 1.32.7
 * @constructor
 * @public
 * @since 1.30.0
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.unified.calendar.DatesRow = function(sId,mSettings) {};
/**
 * displays the a given date without setting the focus
 * 
 * Property <code>date</code> date to be focused or displayed. It must be in the displayed date range
 * beginning with <code>startDate</code> and <code>days</code> days
 * So set this properties before setting the date.
 * @param {object} oDate JavaScript date object for focused date.
 * @returns {sap.ui.unified.calendar.DatesRow} <code>this</code> to allow method chaining
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.unified.calendar.DatesRow.prototype.displayDate = function(oDate) { return new sap.ui.unified.calendar.DatesRow(); };

/**
 * Creates a new subclass of class sap.ui.unified.calendar.DatesRow with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.unified.calendar.Month.extend}.
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object. If not given, it defaults to <code>sap.ui.core.ElementMetadata</code>.
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.unified.calendar.DatesRow.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property <code>days</code>.
 * 
 * number of days displayed
 * 
 * Default value is <code>7</code>.
 * @returns {int} Value of property <code>days</code>
 * @public
 * 
 */
sap.ui.unified.calendar.DatesRow.prototype.getDays = function() { return 0; };

/**
 * Returns a metadata object for class sap.ui.unified.calendar.DatesRow.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.unified.calendar.DatesRow.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property <code>startDate</code>.
 * 
 * Start date of the row
 * If in rendering phase the date property is not in the range startDate + days,
 * it is set to the start date
 * So after setting the start date the date should be set to be in the range of the start date
 * @returns {object} Value of property <code>startDate</code>
 * @public
 * 
 */
sap.ui.unified.calendar.DatesRow.prototype.getStartDate = function() { return new Object(); };

/**
 * Setter for property <code>date</code>.
 * 
 * Property <code>date</code> date to be focused or displayed. It must be in the displayed date range
 * beginning with <code>startDate</code> and <code>days</code> days
 * So set this properties before setting the date.
 * @param {object} oDate JavaScript date object for start date.
 * @returns {sap.ui.unified.calendar.DatesRow} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.calendar.DatesRow.prototype.setDate = function(oDate) { return new sap.ui.unified.calendar.DatesRow(); };

/**
 * Sets a new value for property <code>days</code>.
 * 
 * number of days displayed
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>7</code>.
 * @param {int} iDays New value for property <code>days</code>
 * @returns {sap.ui.unified.calendar.DatesRow} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.calendar.DatesRow.prototype.setDays = function(iDays) { return new sap.ui.unified.calendar.DatesRow(); };

/**
 * Setter for property <code>firstDayOfWeek</code>.
 * 
 * Property <code>firstDayOfWeek</code> is not supported in <code>sap.ui.unified.calendar.DatesRow</code> control.
 * @protected
 * @param {int} [iFirstDayOfWeek] first day of the week
 * 
 */
sap.ui.unified.calendar.DatesRow.prototype.setFirstDayOfWeek = function(iFirstDayOfWeek) {  };

/**
 * Sets a new value for property <code>startDate</code>.
 * 
 * Start date of the row
 * If in rendering phase the date property is not in the range startDate + days,
 * it is set to the start date
 * So after setting the start date the date should be set to be in the range of the start date
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {object} oStartDate New value for property <code>startDate</code>
 * @returns {sap.ui.unified.calendar.DatesRow} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.calendar.DatesRow.prototype.setStartDate = function(oStartDate) { return new sap.ui.unified.calendar.DatesRow(); };


// ---- sap.ui.unified.calendar.Header --------------------------------------------------------------------------

/**
 * Constructor for a new Header.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getTextButton0 textButton0} : string</li>
 * <li>{@link #getAriaLabelButton0 ariaLabelButton0} : string</li>
 * <li>{@link #getVisibleButton0 visibleButton0} : boolean (default: false)</li>
 * <li>{@link #getTextButton1 textButton1} : string</li>
 * <li>{@link #getAriaLabelButton1 ariaLabelButton1} : string</li>
 * <li>{@link #getVisibleButton1 visibleButton1} : boolean (default: true)</li>
 * <li>{@link #getTextButton2 textButton2} : string</li>
 * <li>{@link #getAriaLabelButton2 ariaLabelButton2} : string</li>
 * <li>{@link #getVisibleButton2 visibleButton2} : boolean (default: true)</li>
 * <li>{@link #getEnabledPrevious enabledPrevious} : boolean (default: true)</li>
 * <li>{@link #getEnabledNext enabledNext} : boolean (default: true)</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:pressPrevious pressPrevious} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:pressNext pressNext} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:pressButton0 pressButton0} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:pressButton1 pressButton1} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:pressButton2 pressButton2} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * @class
 * renders a calendar header
 * 
 * The calendar header consists of 3 buttons where the text can be set and a previous and a next button.
 * In the normal calendar the first button contains the displayed day, the second button the displayed month and the third button the displayed year.
 * 
 * <b>Note:</b> This is used inside the calendar. Not for standalone usage
 * @extends sap.ui.core.Control
 * @version 1.32.7
 * @constructor
 * @public
 * @since 1.28.0
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.unified.calendar.Header = function(sId,mSettings) {};
/**
 * First button pressed (normally day)
 * @event
 * @since 1.32.0
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.unified.calendar.Header.prototype.pressButton0 = function(oControlEvent) {  };

/**
 * Second button pressed (normally month)
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.unified.calendar.Header.prototype.pressButton1 = function(oControlEvent) {  };

/**
 * Third button pressed (normally year)
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.unified.calendar.Header.prototype.pressButton2 = function(oControlEvent) {  };

/**
 * Next button pressed
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.unified.calendar.Header.prototype.pressNext = function(oControlEvent) {  };

/**
 * Previous button pressed
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.unified.calendar.Header.prototype.pressPrevious = function(oControlEvent) {  };

/**
 * Attaches event handler <code>fnFunction</code> to the 'pressButton0' event of this <code>sap.ui.unified.calendar.Header</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise it will be bound to this <code>sap.ui.unified.calendar.Header</code> itself.
 * 
 * First button pressed (normally day)
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to be called when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.unified.calendar.Header</code> itself.
 * @returns {sap.ui.unified.calendar.Header} Reference to <code>this</code> in order to allow method chaining
 * @public
 * @since 1.32.0
 * 
 */
sap.ui.unified.calendar.Header.prototype.attachPressButton0 = function(oData,fnFunction,oListener) { return new sap.ui.unified.calendar.Header(); };

/**
 * Attaches event handler <code>fnFunction</code> to the 'pressButton1' event of this <code>sap.ui.unified.calendar.Header</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise it will be bound to this <code>sap.ui.unified.calendar.Header</code> itself.
 * 
 * Second button pressed (normally month)
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to be called when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.unified.calendar.Header</code> itself.
 * @returns {sap.ui.unified.calendar.Header} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.calendar.Header.prototype.attachPressButton1 = function(oData,fnFunction,oListener) { return new sap.ui.unified.calendar.Header(); };

/**
 * Attaches event handler <code>fnFunction</code> to the 'pressButton2' event of this <code>sap.ui.unified.calendar.Header</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise it will be bound to this <code>sap.ui.unified.calendar.Header</code> itself.
 * 
 * Third button pressed (normally year)
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to be called when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.unified.calendar.Header</code> itself.
 * @returns {sap.ui.unified.calendar.Header} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.calendar.Header.prototype.attachPressButton2 = function(oData,fnFunction,oListener) { return new sap.ui.unified.calendar.Header(); };

/**
 * Attaches event handler <code>fnFunction</code> to the 'pressNext' event of this <code>sap.ui.unified.calendar.Header</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise it will be bound to this <code>sap.ui.unified.calendar.Header</code> itself.
 * 
 * Next button pressed
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to be called when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.unified.calendar.Header</code> itself.
 * @returns {sap.ui.unified.calendar.Header} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.calendar.Header.prototype.attachPressNext = function(oData,fnFunction,oListener) { return new sap.ui.unified.calendar.Header(); };

/**
 * Attaches event handler <code>fnFunction</code> to the 'pressPrevious' event of this <code>sap.ui.unified.calendar.Header</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise it will be bound to this <code>sap.ui.unified.calendar.Header</code> itself.
 * 
 * Previous button pressed
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to be called when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.unified.calendar.Header</code> itself.
 * @returns {sap.ui.unified.calendar.Header} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.calendar.Header.prototype.attachPressPrevious = function(oData,fnFunction,oListener) { return new sap.ui.unified.calendar.Header(); };

/**
 * Detaches event handler <code>fnFunction</code> from the 'pressButton0' event of this <code>sap.ui.unified.calendar.Header</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @returns {sap.ui.unified.calendar.Header} Reference to <code>this</code> in order to allow method chaining
 * @since 1.32.0
 * @public
 * 
 */
sap.ui.unified.calendar.Header.prototype.detachPressButton0 = function(fnFunction,oListener) { return new sap.ui.unified.calendar.Header(); };

/**
 * Detaches event handler <code>fnFunction</code> from the 'pressButton1' event of this <code>sap.ui.unified.calendar.Header</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @returns {sap.ui.unified.calendar.Header} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.calendar.Header.prototype.detachPressButton1 = function(fnFunction,oListener) { return new sap.ui.unified.calendar.Header(); };

/**
 * Detaches event handler <code>fnFunction</code> from the 'pressButton2' event of this <code>sap.ui.unified.calendar.Header</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @returns {sap.ui.unified.calendar.Header} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.calendar.Header.prototype.detachPressButton2 = function(fnFunction,oListener) { return new sap.ui.unified.calendar.Header(); };

/**
 * Detaches event handler <code>fnFunction</code> from the 'pressNext' event of this <code>sap.ui.unified.calendar.Header</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @returns {sap.ui.unified.calendar.Header} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.calendar.Header.prototype.detachPressNext = function(fnFunction,oListener) { return new sap.ui.unified.calendar.Header(); };

/**
 * Detaches event handler <code>fnFunction</code> from the 'pressPrevious' event of this <code>sap.ui.unified.calendar.Header</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @returns {sap.ui.unified.calendar.Header} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.calendar.Header.prototype.detachPressPrevious = function(fnFunction,oListener) { return new sap.ui.unified.calendar.Header(); };

/**
 * Creates a new subclass of class sap.ui.unified.calendar.Header with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object. If not given, it defaults to <code>sap.ui.core.ElementMetadata</code>.
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.unified.calendar.Header.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event pressButton0 to attached listeners.
 * @param {Map} [mArguments] The arguments to pass along with the event.
 * @returns {sap.ui.unified.calendar.Header} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * @since 1.32.0
 * 
 */
sap.ui.unified.calendar.Header.prototype.firePressButton0 = function(mArguments) { return new sap.ui.unified.calendar.Header(); };

/**
 * Fires event pressButton1 to attached listeners.
 * @param {Map} [mArguments] The arguments to pass along with the event.
 * @returns {sap.ui.unified.calendar.Header} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.unified.calendar.Header.prototype.firePressButton1 = function(mArguments) { return new sap.ui.unified.calendar.Header(); };

/**
 * Fires event pressButton2 to attached listeners.
 * @param {Map} [mArguments] The arguments to pass along with the event.
 * @returns {sap.ui.unified.calendar.Header} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.unified.calendar.Header.prototype.firePressButton2 = function(mArguments) { return new sap.ui.unified.calendar.Header(); };

/**
 * Fires event pressNext to attached listeners.
 * @param {Map} [mArguments] The arguments to pass along with the event.
 * @returns {sap.ui.unified.calendar.Header} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.unified.calendar.Header.prototype.firePressNext = function(mArguments) { return new sap.ui.unified.calendar.Header(); };

/**
 * Fires event pressPrevious to attached listeners.
 * @param {Map} [mArguments] The arguments to pass along with the event.
 * @returns {sap.ui.unified.calendar.Header} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.unified.calendar.Header.prototype.firePressPrevious = function(mArguments) { return new sap.ui.unified.calendar.Header(); };

/**
 * Gets current value of property <code>ariaLabelButton0</code>.
 * 
 * aria-label of the first button (normally day)
 * @returns {string} Value of property <code>ariaLabelButton0</code>
 * @since 1.32.0
 * @public
 * 
 */
sap.ui.unified.calendar.Header.prototype.getAriaLabelButton0 = function() { return ""; };

/**
 * Gets current value of property <code>ariaLabelButton1</code>.
 * 
 * aria-label of the second button (normally month)
 * @returns {string} Value of property <code>ariaLabelButton1</code>
 * @public
 * 
 */
sap.ui.unified.calendar.Header.prototype.getAriaLabelButton1 = function() { return ""; };

/**
 * Gets current value of property <code>ariaLabelButton2</code>.
 * 
 * aria-label of the third button (normally year)
 * @returns {string} Value of property <code>ariaLabelButton2</code>
 * @public
 * 
 */
sap.ui.unified.calendar.Header.prototype.getAriaLabelButton2 = function() { return ""; };

/**
 * Gets current value of property <code>enabledNext</code>.
 * 
 * Enables the Next button
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>enabledNext</code>
 * @public
 * 
 */
sap.ui.unified.calendar.Header.prototype.getEnabledNext = function() { return false; };

/**
 * Gets current value of property <code>enabledPrevious</code>.
 * 
 * Enables the previous button
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>enabledPrevious</code>
 * @public
 * 
 */
sap.ui.unified.calendar.Header.prototype.getEnabledPrevious = function() { return false; };

/**
 * Returns a metadata object for class sap.ui.unified.calendar.Header.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.unified.calendar.Header.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property <code>textButton0</code>.
 * 
 * Text of the first button (normally day)
 * @returns {string} Value of property <code>textButton0</code>
 * @since 1.32.0
 * @public
 * 
 */
sap.ui.unified.calendar.Header.prototype.getTextButton0 = function() { return ""; };

/**
 * Gets current value of property <code>textButton1</code>.
 * 
 * Text of the second button (normally month)
 * @returns {string} Value of property <code>textButton1</code>
 * @public
 * 
 */
sap.ui.unified.calendar.Header.prototype.getTextButton1 = function() { return ""; };

/**
 * Gets current value of property <code>textButton2</code>.
 * 
 * Text of the third button (normally year)
 * @returns {string} Value of property <code>textButton2</code>
 * @public
 * 
 */
sap.ui.unified.calendar.Header.prototype.getTextButton2 = function() { return ""; };

/**
 * Gets current value of property <code>visibleButton0</code>.
 * 
 * If set, the first button will be displayed
 * 
 * <b>Note:</b> The default is set to false to be compatible to older versions
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>visibleButton0</code>
 * @since 1.32.0
 * @public
 * 
 */
sap.ui.unified.calendar.Header.prototype.getVisibleButton0 = function() { return false; };

/**
 * Gets current value of property <code>visibleButton1</code>.
 * 
 * If set, the second button will be displayed
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>visibleButton1</code>
 * @since 1.32.0
 * @public
 * 
 */
sap.ui.unified.calendar.Header.prototype.getVisibleButton1 = function() { return false; };

/**
 * Gets current value of property <code>visibleButton2</code>.
 * 
 * If set, the third button will be displayed
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>visibleButton2</code>
 * @since 1.32.0
 * @public
 * 
 */
sap.ui.unified.calendar.Header.prototype.getVisibleButton2 = function() { return false; };

/**
 * Sets a new value for property <code>ariaLabelButton0</code>.
 * 
 * aria-label of the first button (normally day)
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sAriaLabelButton0 New value for property <code>ariaLabelButton0</code>
 * @returns {sap.ui.unified.calendar.Header} Reference to <code>this</code> in order to allow method chaining
 * @since 1.32.0
 * @public
 * 
 */
sap.ui.unified.calendar.Header.prototype.setAriaLabelButton0 = function(sAriaLabelButton0) { return new sap.ui.unified.calendar.Header(); };

/**
 * Sets a new value for property <code>ariaLabelButton1</code>.
 * 
 * aria-label of the second button (normally month)
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sAriaLabelButton1 New value for property <code>ariaLabelButton1</code>
 * @returns {sap.ui.unified.calendar.Header} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.calendar.Header.prototype.setAriaLabelButton1 = function(sAriaLabelButton1) { return new sap.ui.unified.calendar.Header(); };

/**
 * Sets a new value for property <code>ariaLabelButton2</code>.
 * 
 * aria-label of the third button (normally year)
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sAriaLabelButton2 New value for property <code>ariaLabelButton2</code>
 * @returns {sap.ui.unified.calendar.Header} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.calendar.Header.prototype.setAriaLabelButton2 = function(sAriaLabelButton2) { return new sap.ui.unified.calendar.Header(); };

/**
 * Sets a new value for property <code>enabledNext</code>.
 * 
 * Enables the Next button
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bEnabledNext New value for property <code>enabledNext</code>
 * @returns {sap.ui.unified.calendar.Header} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.calendar.Header.prototype.setEnabledNext = function(bEnabledNext) { return new sap.ui.unified.calendar.Header(); };

/**
 * Sets a new value for property <code>enabledPrevious</code>.
 * 
 * Enables the previous button
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bEnabledPrevious New value for property <code>enabledPrevious</code>
 * @returns {sap.ui.unified.calendar.Header} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.calendar.Header.prototype.setEnabledPrevious = function(bEnabledPrevious) { return new sap.ui.unified.calendar.Header(); };

/**
 * Sets a new value for property <code>textButton0</code>.
 * 
 * Text of the first button (normally day)
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sTextButton0 New value for property <code>textButton0</code>
 * @returns {sap.ui.unified.calendar.Header} Reference to <code>this</code> in order to allow method chaining
 * @since 1.32.0
 * @public
 * 
 */
sap.ui.unified.calendar.Header.prototype.setTextButton0 = function(sTextButton0) { return new sap.ui.unified.calendar.Header(); };

/**
 * Sets a new value for property <code>textButton1</code>.
 * 
 * Text of the second button (normally month)
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sTextButton1 New value for property <code>textButton1</code>
 * @returns {sap.ui.unified.calendar.Header} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.calendar.Header.prototype.setTextButton1 = function(sTextButton1) { return new sap.ui.unified.calendar.Header(); };

/**
 * Sets a new value for property <code>textButton2</code>.
 * 
 * Text of the third button (normally year)
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sTextButton2 New value for property <code>textButton2</code>
 * @returns {sap.ui.unified.calendar.Header} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.calendar.Header.prototype.setTextButton2 = function(sTextButton2) { return new sap.ui.unified.calendar.Header(); };

/**
 * Sets a new value for property <code>visibleButton0</code>.
 * 
 * If set, the first button will be displayed
 * 
 * <b>Note:</b> The default is set to false to be compatible to older versions
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bVisibleButton0 New value for property <code>visibleButton0</code>
 * @returns {sap.ui.unified.calendar.Header} Reference to <code>this</code> in order to allow method chaining
 * @since 1.32.0
 * @public
 * 
 */
sap.ui.unified.calendar.Header.prototype.setVisibleButton0 = function(bVisibleButton0) { return new sap.ui.unified.calendar.Header(); };

/**
 * Sets a new value for property <code>visibleButton1</code>.
 * 
 * If set, the second button will be displayed
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bVisibleButton1 New value for property <code>visibleButton1</code>
 * @returns {sap.ui.unified.calendar.Header} Reference to <code>this</code> in order to allow method chaining
 * @since 1.32.0
 * @public
 * 
 */
sap.ui.unified.calendar.Header.prototype.setVisibleButton1 = function(bVisibleButton1) { return new sap.ui.unified.calendar.Header(); };

/**
 * Sets a new value for property <code>visibleButton2</code>.
 * 
 * If set, the third button will be displayed
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bVisibleButton2 New value for property <code>visibleButton2</code>
 * @returns {sap.ui.unified.calendar.Header} Reference to <code>this</code> in order to allow method chaining
 * @since 1.32.0
 * @public
 * 
 */
sap.ui.unified.calendar.Header.prototype.setVisibleButton2 = function(bVisibleButton2) { return new sap.ui.unified.calendar.Header(); };


// ---- sap.ui.unified.calendar.Month --------------------------------------------------------------------------

/**
 * Constructor for a new calendar/Month.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getDate date} : object</li>
 * <li>{@link #getIntervalSelection intervalSelection} : boolean (default: false)</li>
 * <li>{@link #getSingleSelection singleSelection} : boolean (default: true)</li>
 * <li>{@link #getShowHeader showHeader} : boolean (default: false)</li>
 * <li>{@link #getFirstDayOfWeek firstDayOfWeek} : int (default: -1)</li>
 * <li>{@link #getNonWorkingDays nonWorkingDays} : int[]</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getSelectedDates selectedDates} : sap.ui.unified.DateRange[]</li>
 * <li>{@link #getSpecialDates specialDates} : sap.ui.unified.DateTypeRange[]</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:select select} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:focus focus} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * renders a month with ItemNavigation
 * This is used inside the calendar. Not for stand alone usage
 * If used inside the calendar the properties and aggregation are directly taken from the parent
 * (To not duplicate and sync DateRanges and so on...)
 * @extends sap.ui.core.Control
 * @version 1.32.7
 * @constructor
 * @public
 * @since 1.28.0
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.unified.calendar.Month = function(sId,mSettings) {};
/**
 * Date focus changed
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {object} oControlEvent.getParameters.date focused date
 * @param {boolean} oControlEvent.getParameters.otherMonth focused date is in an other month that the displayed one
 * @param {boolean} oControlEvent.getParameters.restoreOldDate focused date is set to the same as before (date in other month clicked)
 * @public
 * 
 */
sap.ui.unified.calendar.Month.prototype.focus = function(oControlEvent) {  };

/**
 * Date selection changed
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.unified.calendar.Month.prototype.select = function(oControlEvent) {  };

/**
 * Adds some ariaLabelledBy into the association named <code>ariaLabelledBy</code>.
 * @param {string | sap.ui.core.Control} vAriaLabelledBy the ariaLabelledBy to add; if empty, nothing is inserted
 * @returns {sap.ui.unified.calendar.Month} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.calendar.Month.prototype.addAriaLabelledBy = function(vAriaLabelledBy) { return new sap.ui.unified.calendar.Month(); };

/**
 * Adds some selectedDate into the aggregation named <code>selectedDates</code>.
 * @param {sap.ui.unified.DateRange}
 *            oSelectedDate the selectedDate to add; to add; if empty, nothing is inserted
 * @returns {sap.ui.unified.calendar.Month} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.calendar.Month.prototype.addSelectedDate = function(oSelectedDate) { return new sap.ui.unified.calendar.Month(); };

/**
 * Adds some specialDate into the aggregation named <code>specialDates</code>.
 * @param {sap.ui.unified.DateTypeRange}
 *            oSpecialDate the specialDate to add; to add; if empty, nothing is inserted
 * @returns {sap.ui.unified.calendar.Month} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.calendar.Month.prototype.addSpecialDate = function(oSpecialDate) { return new sap.ui.unified.calendar.Month(); };

/**
 * Attaches event handler <code>fnFunction</code> to the 'focus' event of this <code>sap.ui.unified.calendar.Month</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise it will be bound to this <code>sap.ui.unified.calendar.Month</code> itself.
 * 
 * Date focus changed
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to be called when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.unified.calendar.Month</code> itself.
 * @returns {sap.ui.unified.calendar.Month} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.calendar.Month.prototype.attachFocus = function(oData,fnFunction,oListener) { return new sap.ui.unified.calendar.Month(); };

/**
 * Attaches event handler <code>fnFunction</code> to the 'select' event of this <code>sap.ui.unified.calendar.Month</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise it will be bound to this <code>sap.ui.unified.calendar.Month</code> itself.
 * 
 * Date selection changed
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to be called when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.unified.calendar.Month</code> itself.
 * @returns {sap.ui.unified.calendar.Month} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.calendar.Month.prototype.attachSelect = function(oData,fnFunction,oListener) { return new sap.ui.unified.calendar.Month(); };

/**
 * checks if a date is focusable in the current rendered output.
 * So if not rendered or in other month it is not focusable.
 * @param {object} oDate JavaScript date object for focused date.
 * @returns {boolean} flag if focusable
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.unified.calendar.Month.prototype.checkDateFocusable = function(oDate) { return false; };

/**
 * Destroys all the selectedDates in the aggregation
 * named <code>selectedDates</code>.
 * @returns {sap.ui.unified.calendar.Month} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.calendar.Month.prototype.destroySelectedDates = function() { return new sap.ui.unified.calendar.Month(); };

/**
 * Destroys all the specialDates in the aggregation
 * named <code>specialDates</code>.
 * @returns {sap.ui.unified.calendar.Month} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.calendar.Month.prototype.destroySpecialDates = function() { return new sap.ui.unified.calendar.Month(); };

/**
 * Detaches event handler <code>fnFunction</code> from the 'focus' event of this <code>sap.ui.unified.calendar.Month</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @returns {sap.ui.unified.calendar.Month} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.calendar.Month.prototype.detachFocus = function(fnFunction,oListener) { return new sap.ui.unified.calendar.Month(); };

/**
 * Detaches event handler <code>fnFunction</code> from the 'select' event of this <code>sap.ui.unified.calendar.Month</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @returns {sap.ui.unified.calendar.Month} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.calendar.Month.prototype.detachSelect = function(fnFunction,oListener) { return new sap.ui.unified.calendar.Month(); };

/**
 * displays the month of a given date without setting the focus
 * @param {object} oDate JavaScript date object for focused date.
 * @returns {sap.ui.unified.calendar.Month} <code>this</code> to allow method chaining
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.unified.calendar.Month.prototype.displayDate = function(oDate) { return new sap.ui.unified.calendar.Month(); };

/**
 * Creates a new subclass of class sap.ui.unified.calendar.Month with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object. If not given, it defaults to <code>sap.ui.core.ElementMetadata</code>.
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.unified.calendar.Month.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event focus to attached listeners.
 * 
 * Expects the following event parameters:
 * <ul>
 * <li>'date' of type <code>object</code>focused date</li>
 * <li>'otherMonth' of type <code>boolean</code>focused date is in an other month that the displayed one</li>
 * <li>'restoreOldDate' of type <code>boolean</code>focused date is set to the same as before (date in other month clicked)</li>
 * </ul>
 * @param {Map} [mArguments] The arguments to pass along with the event.
 * @returns {sap.ui.unified.calendar.Month} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.unified.calendar.Month.prototype.fireFocus = function(mArguments) { return new sap.ui.unified.calendar.Month(); };

/**
 * Fires event select to attached listeners.
 * @param {Map} [mArguments] The arguments to pass along with the event.
 * @returns {sap.ui.unified.calendar.Month} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.unified.calendar.Month.prototype.fireSelect = function(mArguments) { return new sap.ui.unified.calendar.Month(); };

/**
 * Returns array of IDs of the elements which are the current targets of the <code>ariaLabelledBy</code> association.
 * 
 * Association to controls / ids which label this control (see WAI-ARIA attribute aria-labelledby).
 * @returns {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.ui.unified.calendar.Month.prototype.getAriaLabelledBy = function() { return new Array(); };

/**
 * Gets current value of property <code>date</code>.
 * 
 * the month including this date is rendered and this date is initial focused (if no other focus set)
 * @returns {object} Value of property <code>date</code>
 * @public
 * 
 */
sap.ui.unified.calendar.Month.prototype.getDate = function() { return new Object(); };

/**
 * Gets current value of property <code>firstDayOfWeek</code>.
 * 
 * If set, the first day of the displayed week is this day. Valid values are 0 to 6.
 * If not a valid value is set, the default of the used locale is used.
 * 
 * Default value is <code>-1</code>.
 * @returns {int} Value of property <code>firstDayOfWeek</code>
 * @since 1.28.9
 * @public
 * 
 */
sap.ui.unified.calendar.Month.prototype.getFirstDayOfWeek = function() { return 0; };

/**
 * Gets current value of property <code>intervalSelection</code>.
 * 
 * If set, interval selection is allowed
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>intervalSelection</code>
 * @public
 * 
 */
sap.ui.unified.calendar.Month.prototype.getIntervalSelection = function() { return false; };

/**
 * Returns a metadata object for class sap.ui.unified.calendar.Month.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.unified.calendar.Month.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property <code>nonWorkingDays</code>.
 * 
 * If set, the provided weekdays are displayed as non-working days.
 * Valid values inside the array are 0 to 6.
 * If not set, the weekend defined in the locale settings is displayed as non-working days.
 * @returns {int[]} Value of property <code>nonWorkingDays</code>
 * @since 1.28.9
 * @public
 * 
 */
sap.ui.unified.calendar.Month.prototype.getNonWorkingDays = function() { return new Array(); };

/**
 * Gets content of aggregation <code>selectedDates</code>.
 * 
 * Date Ranges for selected dates of the DatePicker
 * @returns {sap.ui.unified.DateRange[]}
 * @public
 * 
 */
sap.ui.unified.calendar.Month.prototype.getSelectedDates = function() { return new Array(); };

/**
 * Gets current value of property <code>showHeader</code>.
 * 
 * If set, a header with the month name is shown
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>showHeader</code>
 * @public
 * 
 */
sap.ui.unified.calendar.Month.prototype.getShowHeader = function() { return false; };

/**
 * Gets current value of property <code>singleSelection</code>.
 * 
 * If set, only a single date or interval, if intervalSelection is enabled, can be selected
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>singleSelection</code>
 * @public
 * 
 */
sap.ui.unified.calendar.Month.prototype.getSingleSelection = function() { return false; };

/**
 * Gets content of aggregation <code>specialDates</code>.
 * 
 * Date Range with type to visualize special days in the Calendar.
 * If one day is assigned to more than one Type, only the first one will be used.
 * @returns {sap.ui.unified.DateTypeRange[]}
 * @public
 * 
 */
sap.ui.unified.calendar.Month.prototype.getSpecialDates = function() { return new Array(); };

/**
 * Checks for the provided <code>sap.ui.unified.DateRange</code> in the aggregation named <code>selectedDates</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.unified.DateRange}
 *           oSelectedDate The selectedDate whose index is looked for.
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.unified.calendar.Month.prototype.indexOfSelectedDate = function(oSelectedDate) { return 0; };

/**
 * Checks for the provided <code>sap.ui.unified.DateTypeRange</code> in the aggregation named <code>specialDates</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.unified.DateTypeRange}
 *           oSpecialDate The specialDate whose index is looked for.
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.unified.calendar.Month.prototype.indexOfSpecialDate = function(oSpecialDate) { return 0; };

/**
 * Inserts a selectedDate into the aggregation named <code>selectedDates</code>.
 * @param {sap.ui.unified.DateRange}
 *            oSelectedDate the selectedDate to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the selectedDate should be inserted at; for
 *              a negative value of <code>iIndex</code>, the selectedDate is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the selectedDate is inserted at
 *              the last position
 * @returns {sap.ui.unified.calendar.Month} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.calendar.Month.prototype.insertSelectedDate = function(oSelectedDate,iIndex) { return new sap.ui.unified.calendar.Month(); };

/**
 * Inserts a specialDate into the aggregation named <code>specialDates</code>.
 * @param {sap.ui.unified.DateTypeRange}
 *            oSpecialDate the specialDate to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the specialDate should be inserted at; for
 *              a negative value of <code>iIndex</code>, the specialDate is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the specialDate is inserted at
 *              the last position
 * @returns {sap.ui.unified.calendar.Month} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.calendar.Month.prototype.insertSpecialDate = function(oSpecialDate,iIndex) { return new sap.ui.unified.calendar.Month(); };

/**
 * Removes all the controls in the association named <code>ariaLabelledBy</code>.
 * @returns {sap.ui.core.Control[]} An array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.unified.calendar.Month.prototype.removeAllAriaLabelledBy = function() { return new Array(); };

/**
 * Removes all the controls in the aggregation named <code>selectedDates</code>.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.unified.DateRange[]} An array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.unified.calendar.Month.prototype.removeAllSelectedDates = function() { return new Array(); };

/**
 * Removes all the controls in the aggregation named <code>specialDates</code>.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.unified.DateTypeRange[]} An array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.unified.calendar.Month.prototype.removeAllSpecialDates = function() { return new Array(); };

/**
 * Removes an ariaLabelledBy from the association named <code>ariaLabelledBy</code>.
 * @param {int | string | sap.ui.core.Control} vAriaLabelledBy The ariaLabelledByto be removed or its index or ID
 * @returns {sap.ui.core.Control} the removed ariaLabelledBy or <code>null</code>
 * @public
 * 
 */
sap.ui.unified.calendar.Month.prototype.removeAriaLabelledBy = function(vAriaLabelledBy) { return new sap.ui.core.Control(); };

/**
 * Removes a selectedDate from the aggregation named <code>selectedDates</code>.
 * @param {int | string | sap.ui.unified.DateRange} vSelectedDate The selectedDateto remove or its index or id
 * @returns {sap.ui.unified.DateRange} The removed selectedDate or <code>null</code>
 * @public
 * 
 */
sap.ui.unified.calendar.Month.prototype.removeSelectedDate = function(vSelectedDate) { return new sap.ui.unified.DateRange(); };

/**
 * Removes a specialDate from the aggregation named <code>specialDates</code>.
 * @param {int | string | sap.ui.unified.DateTypeRange} vSpecialDate The specialDateto remove or its index or id
 * @returns {sap.ui.unified.DateTypeRange} The removed specialDate or <code>null</code>
 * @public
 * 
 */
sap.ui.unified.calendar.Month.prototype.removeSpecialDate = function(vSpecialDate) { return new sap.ui.unified.DateTypeRange(); };

/**
 * Sets a new value for property <code>date</code>.
 * 
 * the month including this date is rendered and this date is initial focused (if no other focus set)
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {object} oDate New value for property <code>date</code>
 * @returns {sap.ui.unified.calendar.Month} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.calendar.Month.prototype.setDate = function(oDate) { return new sap.ui.unified.calendar.Month(); };

/**
 * Sets a new value for property <code>firstDayOfWeek</code>.
 * 
 * If set, the first day of the displayed week is this day. Valid values are 0 to 6.
 * If not a valid value is set, the default of the used locale is used.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>-1</code>.
 * @param {int} iFirstDayOfWeek New value for property <code>firstDayOfWeek</code>
 * @returns {sap.ui.unified.calendar.Month} Reference to <code>this</code> in order to allow method chaining
 * @since 1.28.9
 * @public
 * 
 */
sap.ui.unified.calendar.Month.prototype.setFirstDayOfWeek = function(iFirstDayOfWeek) { return new sap.ui.unified.calendar.Month(); };

/**
 * Sets a new value for property <code>intervalSelection</code>.
 * 
 * If set, interval selection is allowed
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bIntervalSelection New value for property <code>intervalSelection</code>
 * @returns {sap.ui.unified.calendar.Month} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.calendar.Month.prototype.setIntervalSelection = function(bIntervalSelection) { return new sap.ui.unified.calendar.Month(); };

/**
 * Sets a new value for property <code>nonWorkingDays</code>.
 * 
 * If set, the provided weekdays are displayed as non-working days.
 * Valid values inside the array are 0 to 6.
 * If not set, the weekend defined in the locale settings is displayed as non-working days.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {int[]} sNonWorkingDays New value for property <code>nonWorkingDays</code>
 * @returns {sap.ui.unified.calendar.Month} Reference to <code>this</code> in order to allow method chaining
 * @since 1.28.9
 * @public
 * 
 */
sap.ui.unified.calendar.Month.prototype.setNonWorkingDays = function(sNonWorkingDays) { return new sap.ui.unified.calendar.Month(); };

/**
 * Sets a new value for property <code>showHeader</code>.
 * 
 * If set, a header with the month name is shown
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bShowHeader New value for property <code>showHeader</code>
 * @returns {sap.ui.unified.calendar.Month} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.calendar.Month.prototype.setShowHeader = function(bShowHeader) { return new sap.ui.unified.calendar.Month(); };

/**
 * Sets a new value for property <code>singleSelection</code>.
 * 
 * If set, only a single date or interval, if intervalSelection is enabled, can be selected
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bSingleSelection New value for property <code>singleSelection</code>
 * @returns {sap.ui.unified.calendar.Month} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.calendar.Month.prototype.setSingleSelection = function(bSingleSelection) { return new sap.ui.unified.calendar.Month(); };


// ---- sap.ui.unified.calendar.MonthPicker --------------------------------------------------------------------------

/**
 * Constructor for a new MonthPicker.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getMonth month} : int (default: 0)</li>
 * <li>{@link #getMonths months} : int (default: 12)</li>
 * <li>{@link #getColumns columns} : int (default: 3)</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:select select} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * renders a MonthPicker with ItemNavigation
 * This is used inside the calendar. Not for stand alone usage
 * @extends sap.ui.core.Control
 * @version 1.32.7
 * @constructor
 * @public
 * @since 1.28.0
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.unified.calendar.MonthPicker = function(sId,mSettings) {};
/**
 * Month selection changed
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.unified.calendar.MonthPicker.prototype.select = function(oControlEvent) {  };

/**
 * Attaches event handler <code>fnFunction</code> to the 'select' event of this <code>sap.ui.unified.calendar.MonthPicker</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise it will be bound to this <code>sap.ui.unified.calendar.MonthPicker</code> itself.
 * 
 * Month selection changed
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to be called when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.unified.calendar.MonthPicker</code> itself.
 * @returns {sap.ui.unified.calendar.MonthPicker} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.calendar.MonthPicker.prototype.attachSelect = function(oData,fnFunction,oListener) { return new sap.ui.unified.calendar.MonthPicker(); };

/**
 * Detaches event handler <code>fnFunction</code> from the 'select' event of this <code>sap.ui.unified.calendar.MonthPicker</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @returns {sap.ui.unified.calendar.MonthPicker} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.calendar.MonthPicker.prototype.detachSelect = function(fnFunction,oListener) { return new sap.ui.unified.calendar.MonthPicker(); };

/**
 * Creates a new subclass of class sap.ui.unified.calendar.MonthPicker with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object. If not given, it defaults to <code>sap.ui.core.ElementMetadata</code>.
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.unified.calendar.MonthPicker.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event select to attached listeners.
 * @param {Map} [mArguments] The arguments to pass along with the event.
 * @returns {sap.ui.unified.calendar.MonthPicker} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.unified.calendar.MonthPicker.prototype.fireSelect = function(mArguments) { return new sap.ui.unified.calendar.MonthPicker(); };

/**
 * Gets current value of property <code>columns</code>.
 * 
 * number of months in each row
 * The value must be between 0 and 12 (0 means just to have all months in one row, independent of the number)
 * 
 * Default value is <code>3</code>.
 * @returns {int} Value of property <code>columns</code>
 * @since 1.30.0
 * @public
 * 
 */
sap.ui.unified.calendar.MonthPicker.prototype.getColumns = function() { return 0; };

/**
 * Returns a metadata object for class sap.ui.unified.calendar.MonthPicker.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.unified.calendar.MonthPicker.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property <code>month</code>.
 * 
 * The month is initial focused and selected
 * The value must be between 0 and 11
 * 
 * Default value is <code>0</code>.
 * @returns {int} Value of property <code>month</code>
 * @public
 * 
 */
sap.ui.unified.calendar.MonthPicker.prototype.getMonth = function() { return 0; };

/**
 * Gets current value of property <code>months</code>.
 * 
 * number of displayed months
 * The value must be between 1 and 12
 * 
 * Default value is <code>12</code>.
 * @returns {int} Value of property <code>months</code>
 * @since 1.30.0
 * @public
 * 
 */
sap.ui.unified.calendar.MonthPicker.prototype.getMonths = function() { return 0; };

/**
 * displays the next page
 * @returns {sap.ui.unified.calendar.MonthPicker} <code>this</code> to allow method chaining
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.unified.calendar.MonthPicker.prototype.nextPage = function() { return new sap.ui.unified.calendar.MonthPicker(); };

/**
 * displays the previous page
 * @returns {sap.ui.unified.calendar.MonthPicker} <code>this</code> to allow method chaining
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.unified.calendar.MonthPicker.prototype.previousPage = function() { return new sap.ui.unified.calendar.MonthPicker(); };

/**
 * Sets a new value for property <code>columns</code>.
 * 
 * number of months in each row
 * The value must be between 0 and 12 (0 means just to have all months in one row, independent of the number)
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>3</code>.
 * @param {int} iColumns New value for property <code>columns</code>
 * @returns {sap.ui.unified.calendar.MonthPicker} Reference to <code>this</code> in order to allow method chaining
 * @since 1.30.0
 * @public
 * 
 */
sap.ui.unified.calendar.MonthPicker.prototype.setColumns = function(iColumns) { return new sap.ui.unified.calendar.MonthPicker(); };

/**
 * Sets a new value for property <code>month</code>.
 * 
 * The month is initial focused and selected
 * The value must be between 0 and 11
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>0</code>.
 * @param {int} iMonth New value for property <code>month</code>
 * @returns {sap.ui.unified.calendar.MonthPicker} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.calendar.MonthPicker.prototype.setMonth = function(iMonth) { return new sap.ui.unified.calendar.MonthPicker(); };

/**
 * Sets a new value for property <code>months</code>.
 * 
 * number of displayed months
 * The value must be between 1 and 12
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>12</code>.
 * @param {int} iMonths New value for property <code>months</code>
 * @returns {sap.ui.unified.calendar.MonthPicker} Reference to <code>this</code> in order to allow method chaining
 * @since 1.30.0
 * @public
 * 
 */
sap.ui.unified.calendar.MonthPicker.prototype.setMonths = function(iMonths) { return new sap.ui.unified.calendar.MonthPicker(); };


// ---- sap.ui.unified.calendar.MonthsRow --------------------------------------------------------------------------

/**
 * Constructor for a new <code>MonthsRow</code>.
 * It shows a calendar with month granularity
 * 
 * <b>Note:</b> This is used inside the CalendarMonthInterval, not for standalone usage.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getDate date} : object</li>
 * <li>{@link #getStartDate startDate} : object</li>
 * <li>{@link #getMonths months} : int (default: 12)</li>
 * <li>{@link #getIntervalSelection intervalSelection} : boolean (default: false)</li>
 * <li>{@link #getSingleSelection singleSelection} : boolean (default: true)</li>
 * <li>{@link #getShowHeader showHeader} : boolean (default: false)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getSelectedDates selectedDates} : sap.ui.unified.DateRange[]</li>
 * <li>{@link #getSpecialDates specialDates} : sap.ui.unified.DateTypeRange[]</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:select select} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:focus focus} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * @class
 * Renders a row of months using ItemNavigation. There is no paging or navigation outside the rendered area implemented.
 * This is done inside the CalendarMonthInterval.
 * If used inside the CalendarMonthInterval the properties and aggregation are directly taken from the parent
 * (to not duplicate and synchronize DateRanges and so on...).
 * 
 * The MontsRow works with JavaScript Date objects, but only the month and the year are used to display and interact.
 * As representation for a month, the 1st of the month will always be returned in the API.
 * @extends sap.ui.core.Control
 * @version 1.32.7
 * @constructor
 * @public
 * @since 1.32.0
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.unified.calendar.MonthsRow = function(sId,mSettings) {};
/**
 * Month focus changed
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {object} oControlEvent.getParameters.date First date, as JavaScript Date object, of the month that is focused.
 * @param {boolean} oControlEvent.getParameters.notVisible If set, the focused date is not rendered yet. (This happens by navigating out of the visible area.)
 * @public
 * 
 */
sap.ui.unified.calendar.MonthsRow.prototype.focus = function(oControlEvent) {  };

/**
 * Month selection changed
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.unified.calendar.MonthsRow.prototype.select = function(oControlEvent) {  };

/**
 * Adds some ariaLabelledBy into the association named <code>ariaLabelledBy</code>.
 * @param {string | sap.ui.core.Control} vAriaLabelledBy the ariaLabelledBy to add; if empty, nothing is inserted
 * @returns {sap.ui.unified.calendar.MonthsRow} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.calendar.MonthsRow.prototype.addAriaLabelledBy = function(vAriaLabelledBy) { return new sap.ui.unified.calendar.MonthsRow(); };

/**
 * Adds some selectedDate into the aggregation named <code>selectedDates</code>.
 * @param {sap.ui.unified.DateRange}
 *            oSelectedDate the selectedDate to add; to add; if empty, nothing is inserted
 * @returns {sap.ui.unified.calendar.MonthsRow} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.calendar.MonthsRow.prototype.addSelectedDate = function(oSelectedDate) { return new sap.ui.unified.calendar.MonthsRow(); };

/**
 * Adds some specialDate into the aggregation named <code>specialDates</code>.
 * @param {sap.ui.unified.DateTypeRange}
 *            oSpecialDate the specialDate to add; to add; if empty, nothing is inserted
 * @returns {sap.ui.unified.calendar.MonthsRow} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.calendar.MonthsRow.prototype.addSpecialDate = function(oSpecialDate) { return new sap.ui.unified.calendar.MonthsRow(); };

/**
 * Attaches event handler <code>fnFunction</code> to the 'focus' event of this <code>sap.ui.unified.calendar.MonthsRow</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise it will be bound to this <code>sap.ui.unified.calendar.MonthsRow</code> itself.
 * 
 * Month focus changed
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to be called when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.unified.calendar.MonthsRow</code> itself.
 * @returns {sap.ui.unified.calendar.MonthsRow} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.calendar.MonthsRow.prototype.attachFocus = function(oData,fnFunction,oListener) { return new sap.ui.unified.calendar.MonthsRow(); };

/**
 * Attaches event handler <code>fnFunction</code> to the 'select' event of this <code>sap.ui.unified.calendar.MonthsRow</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise it will be bound to this <code>sap.ui.unified.calendar.MonthsRow</code> itself.
 * 
 * Month selection changed
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to be called when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.unified.calendar.MonthsRow</code> itself.
 * @returns {sap.ui.unified.calendar.MonthsRow} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.calendar.MonthsRow.prototype.attachSelect = function(oData,fnFunction,oListener) { return new sap.ui.unified.calendar.MonthsRow(); };

/**
 * Checks if a date is focusable in the current rendered output.
 * This means that if it is not rendered, it is not focusable.
 * @param {object} oDate JavaScript Date object for focused date.
 * @returns {boolean} flag if focusable
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.unified.calendar.MonthsRow.prototype.checkDateFocusable = function(oDate) { return false; };

/**
 * Destroys all the selectedDates in the aggregation
 * named <code>selectedDates</code>.
 * @returns {sap.ui.unified.calendar.MonthsRow} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.calendar.MonthsRow.prototype.destroySelectedDates = function() { return new sap.ui.unified.calendar.MonthsRow(); };

/**
 * Destroys all the specialDates in the aggregation
 * named <code>specialDates</code>.
 * @returns {sap.ui.unified.calendar.MonthsRow} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.calendar.MonthsRow.prototype.destroySpecialDates = function() { return new sap.ui.unified.calendar.MonthsRow(); };

/**
 * Detaches event handler <code>fnFunction</code> from the 'focus' event of this <code>sap.ui.unified.calendar.MonthsRow</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @returns {sap.ui.unified.calendar.MonthsRow} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.calendar.MonthsRow.prototype.detachFocus = function(fnFunction,oListener) { return new sap.ui.unified.calendar.MonthsRow(); };

/**
 * Detaches event handler <code>fnFunction</code> from the 'select' event of this <code>sap.ui.unified.calendar.MonthsRow</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @returns {sap.ui.unified.calendar.MonthsRow} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.calendar.MonthsRow.prototype.detachSelect = function(fnFunction,oListener) { return new sap.ui.unified.calendar.MonthsRow(); };

/**
 * Displays the month of a given date without setting the focus
 * @param {object} oDate JavaScript Date object for focused date.
 * @returns {sap.ui.unified.calendar.MonthsRow} <code>this</code> to allow method chaining
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.unified.calendar.MonthsRow.prototype.displayDate = function(oDate) { return new sap.ui.unified.calendar.MonthsRow(); };

/**
 * Creates a new subclass of class sap.ui.unified.calendar.MonthsRow with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object. If not given, it defaults to <code>sap.ui.core.ElementMetadata</code>.
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.unified.calendar.MonthsRow.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event focus to attached listeners.
 * 
 * Expects the following event parameters:
 * <ul>
 * <li>'date' of type <code>object</code>First date, as JavaScript Date object, of the month that is focused.</li>
 * <li>'notVisible' of type <code>boolean</code>If set, the focused date is not rendered yet. (This happens by navigating out of the visible area.)</li>
 * </ul>
 * @param {Map} [mArguments] The arguments to pass along with the event.
 * @returns {sap.ui.unified.calendar.MonthsRow} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.unified.calendar.MonthsRow.prototype.fireFocus = function(mArguments) { return new sap.ui.unified.calendar.MonthsRow(); };

/**
 * Fires event select to attached listeners.
 * @param {Map} [mArguments] The arguments to pass along with the event.
 * @returns {sap.ui.unified.calendar.MonthsRow} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.unified.calendar.MonthsRow.prototype.fireSelect = function(mArguments) { return new sap.ui.unified.calendar.MonthsRow(); };

/**
 * Returns array of IDs of the elements which are the current targets of the <code>ariaLabelledBy</code> association.
 * 
 * Association to controls / IDs which label this control (see WAI-ARIA attribute aria-labelledby).
 * @returns {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.ui.unified.calendar.MonthsRow.prototype.getAriaLabelledBy = function() { return new Array(); };

/**
 * Gets current value of property <code>date</code>.
 * 
 * A date as JavaScript Date object. The month including this date is rendered and this date is focused initially (if no other focus is set).
 * If the date property is not in the range <code>startDate</code> + <code>months</code> in the rendering phase,
 * it is set to the <code>startDate</code>.
 * So after setting the <code>startDate</code> the date should be set to be in the visible range.
 * @returns {object} Value of property <code>date</code>
 * @public
 * 
 */
sap.ui.unified.calendar.MonthsRow.prototype.getDate = function() { return new Object(); };

/**
 * Gets current value of property <code>intervalSelection</code>.
 * 
 * If set, interval selection is allowed
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>intervalSelection</code>
 * @public
 * 
 */
sap.ui.unified.calendar.MonthsRow.prototype.getIntervalSelection = function() { return false; };

/**
 * Returns a metadata object for class sap.ui.unified.calendar.MonthsRow.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.unified.calendar.MonthsRow.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property <code>months</code>.
 * 
 * Number of months displayed
 * 
 * Default value is <code>12</code>.
 * @returns {int} Value of property <code>months</code>
 * @public
 * 
 */
sap.ui.unified.calendar.MonthsRow.prototype.getMonths = function() { return 0; };

/**
 * Gets content of aggregation <code>selectedDates</code>.
 * 
 * Date ranges for selected dates.
 * If <code>singleSelection</code> is set, only the first entry is used.
 * 
 * <b>Note:</b> Even if only one day is selected, the whole corresponding month is selected.
 * @returns {sap.ui.unified.DateRange[]}
 * @public
 * 
 */
sap.ui.unified.calendar.MonthsRow.prototype.getSelectedDates = function() { return new Array(); };

/**
 * Gets current value of property <code>showHeader</code>.
 * 
 * If set, a header with the years is shown to visualize what month belongs to what year.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>showHeader</code>
 * @public
 * 
 */
sap.ui.unified.calendar.MonthsRow.prototype.getShowHeader = function() { return false; };

/**
 * Gets current value of property <code>singleSelection</code>.
 * 
 * If set, only a single month or interval, if intervalSelection is enabled, can be selected
 * 
 * <b>Note:</b> Selection of multiple intervals is not supported in the current version.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>singleSelection</code>
 * @public
 * 
 */
sap.ui.unified.calendar.MonthsRow.prototype.getSingleSelection = function() { return false; };

/**
 * Gets content of aggregation <code>specialDates</code>.
 * 
 * Date ranges with type to visualize special months in the row.
 * If one day is assigned to more than one type, only the first one will be used.
 * 
 * <b>Note:</b> Even if only one day is set as a special day, the whole corresponding month is displayed in this way.
 * @returns {sap.ui.unified.DateTypeRange[]}
 * @public
 * 
 */
sap.ui.unified.calendar.MonthsRow.prototype.getSpecialDates = function() { return new Array(); };

/**
 * Gets current value of property <code>startDate</code>.
 * 
 * Start date, as JavaScript Date object, of the row. The month of this date is the first month of the displayed row.
 * @returns {object} Value of property <code>startDate</code>
 * @public
 * 
 */
sap.ui.unified.calendar.MonthsRow.prototype.getStartDate = function() { return new Object(); };

/**
 * Checks for the provided <code>sap.ui.unified.DateRange</code> in the aggregation named <code>selectedDates</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.unified.DateRange}
 *           oSelectedDate The selectedDate whose index is looked for.
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.unified.calendar.MonthsRow.prototype.indexOfSelectedDate = function(oSelectedDate) { return 0; };

/**
 * Checks for the provided <code>sap.ui.unified.DateTypeRange</code> in the aggregation named <code>specialDates</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.unified.DateTypeRange}
 *           oSpecialDate The specialDate whose index is looked for.
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.unified.calendar.MonthsRow.prototype.indexOfSpecialDate = function(oSpecialDate) { return 0; };

/**
 * Inserts a selectedDate into the aggregation named <code>selectedDates</code>.
 * @param {sap.ui.unified.DateRange}
 *            oSelectedDate the selectedDate to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the selectedDate should be inserted at; for
 *              a negative value of <code>iIndex</code>, the selectedDate is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the selectedDate is inserted at
 *              the last position
 * @returns {sap.ui.unified.calendar.MonthsRow} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.calendar.MonthsRow.prototype.insertSelectedDate = function(oSelectedDate,iIndex) { return new sap.ui.unified.calendar.MonthsRow(); };

/**
 * Inserts a specialDate into the aggregation named <code>specialDates</code>.
 * @param {sap.ui.unified.DateTypeRange}
 *            oSpecialDate the specialDate to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the specialDate should be inserted at; for
 *              a negative value of <code>iIndex</code>, the specialDate is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the specialDate is inserted at
 *              the last position
 * @returns {sap.ui.unified.calendar.MonthsRow} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.calendar.MonthsRow.prototype.insertSpecialDate = function(oSpecialDate,iIndex) { return new sap.ui.unified.calendar.MonthsRow(); };

/**
 * Removes all the controls in the association named <code>ariaLabelledBy</code>.
 * @returns {sap.ui.core.Control[]} An array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.unified.calendar.MonthsRow.prototype.removeAllAriaLabelledBy = function() { return new Array(); };

/**
 * Removes all the controls in the aggregation named <code>selectedDates</code>.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.unified.DateRange[]} An array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.unified.calendar.MonthsRow.prototype.removeAllSelectedDates = function() { return new Array(); };

/**
 * Removes all the controls in the aggregation named <code>specialDates</code>.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.unified.DateTypeRange[]} An array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.unified.calendar.MonthsRow.prototype.removeAllSpecialDates = function() { return new Array(); };

/**
 * Removes an ariaLabelledBy from the association named <code>ariaLabelledBy</code>.
 * @param {int | string | sap.ui.core.Control} vAriaLabelledBy The ariaLabelledByto be removed or its index or ID
 * @returns {sap.ui.core.Control} the removed ariaLabelledBy or <code>null</code>
 * @public
 * 
 */
sap.ui.unified.calendar.MonthsRow.prototype.removeAriaLabelledBy = function(vAriaLabelledBy) { return new sap.ui.core.Control(); };

/**
 * Removes a selectedDate from the aggregation named <code>selectedDates</code>.
 * @param {int | string | sap.ui.unified.DateRange} vSelectedDate The selectedDateto remove or its index or id
 * @returns {sap.ui.unified.DateRange} The removed selectedDate or <code>null</code>
 * @public
 * 
 */
sap.ui.unified.calendar.MonthsRow.prototype.removeSelectedDate = function(vSelectedDate) { return new sap.ui.unified.DateRange(); };

/**
 * Removes a specialDate from the aggregation named <code>specialDates</code>.
 * @param {int | string | sap.ui.unified.DateTypeRange} vSpecialDate The specialDateto remove or its index or id
 * @returns {sap.ui.unified.DateTypeRange} The removed specialDate or <code>null</code>
 * @public
 * 
 */
sap.ui.unified.calendar.MonthsRow.prototype.removeSpecialDate = function(vSpecialDate) { return new sap.ui.unified.DateTypeRange(); };

/**
 * Sets a new value for property <code>date</code>.
 * 
 * A date as JavaScript Date object. The month including this date is rendered and this date is focused initially (if no other focus is set).
 * If the date property is not in the range <code>startDate</code> + <code>months</code> in the rendering phase,
 * it is set to the <code>startDate</code>.
 * So after setting the <code>startDate</code> the date should be set to be in the visible range.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {object} oDate New value for property <code>date</code>
 * @returns {sap.ui.unified.calendar.MonthsRow} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.calendar.MonthsRow.prototype.setDate = function(oDate) { return new sap.ui.unified.calendar.MonthsRow(); };

/**
 * Sets a new value for property <code>intervalSelection</code>.
 * 
 * If set, interval selection is allowed
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bIntervalSelection New value for property <code>intervalSelection</code>
 * @returns {sap.ui.unified.calendar.MonthsRow} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.calendar.MonthsRow.prototype.setIntervalSelection = function(bIntervalSelection) { return new sap.ui.unified.calendar.MonthsRow(); };

/**
 * Sets a new value for property <code>months</code>.
 * 
 * Number of months displayed
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>12</code>.
 * @param {int} iMonths New value for property <code>months</code>
 * @returns {sap.ui.unified.calendar.MonthsRow} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.calendar.MonthsRow.prototype.setMonths = function(iMonths) { return new sap.ui.unified.calendar.MonthsRow(); };

/**
 * Sets a new value for property <code>showHeader</code>.
 * 
 * If set, a header with the years is shown to visualize what month belongs to what year.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bShowHeader New value for property <code>showHeader</code>
 * @returns {sap.ui.unified.calendar.MonthsRow} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.calendar.MonthsRow.prototype.setShowHeader = function(bShowHeader) { return new sap.ui.unified.calendar.MonthsRow(); };

/**
 * Sets a new value for property <code>singleSelection</code>.
 * 
 * If set, only a single month or interval, if intervalSelection is enabled, can be selected
 * 
 * <b>Note:</b> Selection of multiple intervals is not supported in the current version.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bSingleSelection New value for property <code>singleSelection</code>
 * @returns {sap.ui.unified.calendar.MonthsRow} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.calendar.MonthsRow.prototype.setSingleSelection = function(bSingleSelection) { return new sap.ui.unified.calendar.MonthsRow(); };

/**
 * Sets a new value for property <code>startDate</code>.
 * 
 * Start date, as JavaScript Date object, of the row. The month of this date is the first month of the displayed row.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {object} oStartDate New value for property <code>startDate</code>
 * @returns {sap.ui.unified.calendar.MonthsRow} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.calendar.MonthsRow.prototype.setStartDate = function(oStartDate) { return new sap.ui.unified.calendar.MonthsRow(); };


// ---- sap.ui.unified.calendar.TimesRow --------------------------------------------------------------------------

/**
 * Constructor for a new <code>TimesRow</code>.
 * It shows a calendar with time granularity (normally hours)
 * 
 * <b>Note:</b> This is used inside the CalendarTimeInterval, not for standalone usage.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getDate date} : object</li>
 * <li>{@link #getStartDate startDate} : object</li>
 * <li>{@link #getItems items} : int (default: 12)</li>
 * <li>{@link #getIntervalMinutes intervalMinutes} : int (default: 60)</li>
 * <li>{@link #getIntervalSelection intervalSelection} : boolean (default: false)</li>
 * <li>{@link #getSingleSelection singleSelection} : boolean (default: true)</li>
 * <li>{@link #getShowHeader showHeader} : boolean (default: false)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getSelectedDates selectedDates} : sap.ui.unified.DateRange[]</li>
 * <li>{@link #getSpecialDates specialDates} : sap.ui.unified.DateTypeRange[]</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:select select} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:focus focus} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * @class
 * Renders a row of time items using ItemNavigation. There is no paging or navigation outside the rendered area implemented.
 * This is done inside the CalendarTimeInterval.
 * If used inside the CalendarTimeInterval the properties and aggregation are directly taken from the parent
 * (to not duplicate and synchronize DateRanges and so on...).
 * 
 * The TimesRow works with JavaScript Date objects.
 * @extends sap.ui.core.Control
 * @version 1.32.7
 * @constructor
 * @public
 * @since 1.32.0
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.unified.calendar.TimesRow = function(sId,mSettings) {};
/**
 * Time focus changed
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {object} oControlEvent.getParameters.date date, as JavaScript Date object, of the focused time.
 * @param {boolean} oControlEvent.getParameters.notVisible If set, the focused date is not rendered yet. (This happens by navigating out of the visible area.)
 * @public
 * 
 */
sap.ui.unified.calendar.TimesRow.prototype.focus = function(oControlEvent) {  };

/**
 * Time selection changed
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.unified.calendar.TimesRow.prototype.select = function(oControlEvent) {  };

/**
 * Adds some ariaLabelledBy into the association named <code>ariaLabelledBy</code>.
 * @param {string | sap.ui.core.Control} vAriaLabelledBy the ariaLabelledBy to add; if empty, nothing is inserted
 * @returns {sap.ui.unified.calendar.TimesRow} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.calendar.TimesRow.prototype.addAriaLabelledBy = function(vAriaLabelledBy) { return new sap.ui.unified.calendar.TimesRow(); };

/**
 * Adds some selectedDate into the aggregation named <code>selectedDates</code>.
 * @param {sap.ui.unified.DateRange}
 *            oSelectedDate the selectedDate to add; to add; if empty, nothing is inserted
 * @returns {sap.ui.unified.calendar.TimesRow} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.calendar.TimesRow.prototype.addSelectedDate = function(oSelectedDate) { return new sap.ui.unified.calendar.TimesRow(); };

/**
 * Adds some specialDate into the aggregation named <code>specialDates</code>.
 * @param {sap.ui.unified.DateTypeRange}
 *            oSpecialDate the specialDate to add; to add; if empty, nothing is inserted
 * @returns {sap.ui.unified.calendar.TimesRow} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.calendar.TimesRow.prototype.addSpecialDate = function(oSpecialDate) { return new sap.ui.unified.calendar.TimesRow(); };

/**
 * Attaches event handler <code>fnFunction</code> to the 'focus' event of this <code>sap.ui.unified.calendar.TimesRow</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise it will be bound to this <code>sap.ui.unified.calendar.TimesRow</code> itself.
 * 
 * Time focus changed
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to be called when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.unified.calendar.TimesRow</code> itself.
 * @returns {sap.ui.unified.calendar.TimesRow} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.calendar.TimesRow.prototype.attachFocus = function(oData,fnFunction,oListener) { return new sap.ui.unified.calendar.TimesRow(); };

/**
 * Attaches event handler <code>fnFunction</code> to the 'select' event of this <code>sap.ui.unified.calendar.TimesRow</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise it will be bound to this <code>sap.ui.unified.calendar.TimesRow</code> itself.
 * 
 * Time selection changed
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to be called when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.unified.calendar.TimesRow</code> itself.
 * @returns {sap.ui.unified.calendar.TimesRow} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.calendar.TimesRow.prototype.attachSelect = function(oData,fnFunction,oListener) { return new sap.ui.unified.calendar.TimesRow(); };

/**
 * Checks if a date is focusable in the current rendered output.
 * This means that if it is not rendered, it is not focusable.
 * @param {object} oDate JavaScript Date object for focused date.
 * @returns {boolean} flag if focusable
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.unified.calendar.TimesRow.prototype.checkDateFocusable = function(oDate) { return false; };

/**
 * Destroys all the selectedDates in the aggregation
 * named <code>selectedDates</code>.
 * @returns {sap.ui.unified.calendar.TimesRow} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.calendar.TimesRow.prototype.destroySelectedDates = function() { return new sap.ui.unified.calendar.TimesRow(); };

/**
 * Destroys all the specialDates in the aggregation
 * named <code>specialDates</code>.
 * @returns {sap.ui.unified.calendar.TimesRow} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.calendar.TimesRow.prototype.destroySpecialDates = function() { return new sap.ui.unified.calendar.TimesRow(); };

/**
 * Detaches event handler <code>fnFunction</code> from the 'focus' event of this <code>sap.ui.unified.calendar.TimesRow</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @returns {sap.ui.unified.calendar.TimesRow} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.calendar.TimesRow.prototype.detachFocus = function(fnFunction,oListener) { return new sap.ui.unified.calendar.TimesRow(); };

/**
 * Detaches event handler <code>fnFunction</code> from the 'select' event of this <code>sap.ui.unified.calendar.TimesRow</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @returns {sap.ui.unified.calendar.TimesRow} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.calendar.TimesRow.prototype.detachSelect = function(fnFunction,oListener) { return new sap.ui.unified.calendar.TimesRow(); };

/**
 * Displays the given date without setting the focus
 * @param {object} oDate JavaScript Date object for focused date.
 * @returns {sap.ui.unified.calendar.TimesRow} <code>this</code> to allow method chaining
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.unified.calendar.TimesRow.prototype.displayDate = function(oDate) { return new sap.ui.unified.calendar.TimesRow(); };

/**
 * Creates a new subclass of class sap.ui.unified.calendar.TimesRow with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object. If not given, it defaults to <code>sap.ui.core.ElementMetadata</code>.
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.unified.calendar.TimesRow.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event focus to attached listeners.
 * 
 * Expects the following event parameters:
 * <ul>
 * <li>'date' of type <code>object</code>date, as JavaScript Date object, of the focused time.</li>
 * <li>'notVisible' of type <code>boolean</code>If set, the focused date is not rendered yet. (This happens by navigating out of the visible area.)</li>
 * </ul>
 * @param {Map} [mArguments] The arguments to pass along with the event.
 * @returns {sap.ui.unified.calendar.TimesRow} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.unified.calendar.TimesRow.prototype.fireFocus = function(mArguments) { return new sap.ui.unified.calendar.TimesRow(); };

/**
 * Fires event select to attached listeners.
 * @param {Map} [mArguments] The arguments to pass along with the event.
 * @returns {sap.ui.unified.calendar.TimesRow} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.unified.calendar.TimesRow.prototype.fireSelect = function(mArguments) { return new sap.ui.unified.calendar.TimesRow(); };

/**
 * Returns array of IDs of the elements which are the current targets of the <code>ariaLabelledBy</code> association.
 * 
 * Association to controls / IDs which label this control (see WAI-ARIA attribute aria-labelledby).
 * @returns {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.ui.unified.calendar.TimesRow.prototype.getAriaLabelledBy = function() { return new Array(); };

/**
 * Gets current value of property <code>date</code>.
 * 
 * A date as JavaScript Date object. The month including this date is rendered and this date is focused initially (if no other focus is set).
 * If the date property is not in the range <code>startDate</code> + <code>items</code> in the rendering phase,
 * it is set to the <code>startDate</code>.
 * So after setting the <code>startDate</code> the date should be set to be in the visible range.
 * @returns {object} Value of property <code>date</code>
 * @public
 * 
 */
sap.ui.unified.calendar.TimesRow.prototype.getDate = function() { return new Object(); };

/**
 * Gets current value of property <code>intervalMinutes</code>.
 * 
 * Size of on time interval in minutes, default is 60 minutes.
 * 
 * <b>Note:</b> the start of the interval calculation is always <code>startDat</code> at 00:00.
 * 
 * A interval longer then 720 minutes is not allowed. Please use the <code>DatesRow</code> instead.
 * 
 * A day must be divisible by this interval size. One interval must not include more than one day.
 * 
 * Default value is <code>60</code>.
 * @returns {int} Value of property <code>intervalMinutes</code>
 * @public
 * 
 */
sap.ui.unified.calendar.TimesRow.prototype.getIntervalMinutes = function() { return 0; };

/**
 * Gets current value of property <code>intervalSelection</code>.
 * 
 * If set, interval selection is allowed
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>intervalSelection</code>
 * @public
 * 
 */
sap.ui.unified.calendar.TimesRow.prototype.getIntervalSelection = function() { return false; };

/**
 * Gets current value of property <code>items</code>.
 * 
 * Number of time items displayed
 * 
 * Default value is <code>12</code>.
 * @returns {int} Value of property <code>items</code>
 * @public
 * 
 */
sap.ui.unified.calendar.TimesRow.prototype.getItems = function() { return 0; };

/**
 * Returns a metadata object for class sap.ui.unified.calendar.TimesRow.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.unified.calendar.TimesRow.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets content of aggregation <code>selectedDates</code>.
 * 
 * Date ranges for selected dates.
 * If <code>singleSelection</code> is set, only the first entry is used.
 * @returns {sap.ui.unified.DateRange[]}
 * @public
 * 
 */
sap.ui.unified.calendar.TimesRow.prototype.getSelectedDates = function() { return new Array(); };

/**
 * Gets current value of property <code>showHeader</code>.
 * 
 * If set, a header with the years is shown to visualize what month belongs to what year.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>showHeader</code>
 * @public
 * 
 */
sap.ui.unified.calendar.TimesRow.prototype.getShowHeader = function() { return false; };

/**
 * Gets current value of property <code>singleSelection</code>.
 * 
 * If set, only a single month or interval, if intervalSelection is enabled, can be selected
 * 
 * <b>Note:</b> Selection of multiple intervals is not supported in the current version.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>singleSelection</code>
 * @public
 * 
 */
sap.ui.unified.calendar.TimesRow.prototype.getSingleSelection = function() { return false; };

/**
 * Gets content of aggregation <code>specialDates</code>.
 * 
 * Date ranges with type to visualize special item in the row.
 * If one day is assigned to more than one type, only the first one will be used.
 * @returns {sap.ui.unified.DateTypeRange[]}
 * @public
 * 
 */
sap.ui.unified.calendar.TimesRow.prototype.getSpecialDates = function() { return new Array(); };

/**
 * Gets current value of property <code>startDate</code>.
 * 
 * Start date, as JavaScript Date object, of the row.
 * @returns {object} Value of property <code>startDate</code>
 * @public
 * 
 */
sap.ui.unified.calendar.TimesRow.prototype.getStartDate = function() { return new Object(); };

/**
 * Checks for the provided <code>sap.ui.unified.DateRange</code> in the aggregation named <code>selectedDates</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.unified.DateRange}
 *           oSelectedDate The selectedDate whose index is looked for.
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.unified.calendar.TimesRow.prototype.indexOfSelectedDate = function(oSelectedDate) { return 0; };

/**
 * Checks for the provided <code>sap.ui.unified.DateTypeRange</code> in the aggregation named <code>specialDates</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.unified.DateTypeRange}
 *           oSpecialDate The specialDate whose index is looked for.
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.unified.calendar.TimesRow.prototype.indexOfSpecialDate = function(oSpecialDate) { return 0; };

/**
 * Inserts a selectedDate into the aggregation named <code>selectedDates</code>.
 * @param {sap.ui.unified.DateRange}
 *            oSelectedDate the selectedDate to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the selectedDate should be inserted at; for
 *              a negative value of <code>iIndex</code>, the selectedDate is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the selectedDate is inserted at
 *              the last position
 * @returns {sap.ui.unified.calendar.TimesRow} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.calendar.TimesRow.prototype.insertSelectedDate = function(oSelectedDate,iIndex) { return new sap.ui.unified.calendar.TimesRow(); };

/**
 * Inserts a specialDate into the aggregation named <code>specialDates</code>.
 * @param {sap.ui.unified.DateTypeRange}
 *            oSpecialDate the specialDate to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the specialDate should be inserted at; for
 *              a negative value of <code>iIndex</code>, the specialDate is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the specialDate is inserted at
 *              the last position
 * @returns {sap.ui.unified.calendar.TimesRow} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.calendar.TimesRow.prototype.insertSpecialDate = function(oSpecialDate,iIndex) { return new sap.ui.unified.calendar.TimesRow(); };

/**
 * Removes all the controls in the association named <code>ariaLabelledBy</code>.
 * @returns {sap.ui.core.Control[]} An array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.unified.calendar.TimesRow.prototype.removeAllAriaLabelledBy = function() { return new Array(); };

/**
 * Removes all the controls in the aggregation named <code>selectedDates</code>.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.unified.DateRange[]} An array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.unified.calendar.TimesRow.prototype.removeAllSelectedDates = function() { return new Array(); };

/**
 * Removes all the controls in the aggregation named <code>specialDates</code>.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.unified.DateTypeRange[]} An array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.unified.calendar.TimesRow.prototype.removeAllSpecialDates = function() { return new Array(); };

/**
 * Removes an ariaLabelledBy from the association named <code>ariaLabelledBy</code>.
 * @param {int | string | sap.ui.core.Control} vAriaLabelledBy The ariaLabelledByto be removed or its index or ID
 * @returns {sap.ui.core.Control} the removed ariaLabelledBy or <code>null</code>
 * @public
 * 
 */
sap.ui.unified.calendar.TimesRow.prototype.removeAriaLabelledBy = function(vAriaLabelledBy) { return new sap.ui.core.Control(); };

/**
 * Removes a selectedDate from the aggregation named <code>selectedDates</code>.
 * @param {int | string | sap.ui.unified.DateRange} vSelectedDate The selectedDateto remove or its index or id
 * @returns {sap.ui.unified.DateRange} The removed selectedDate or <code>null</code>
 * @public
 * 
 */
sap.ui.unified.calendar.TimesRow.prototype.removeSelectedDate = function(vSelectedDate) { return new sap.ui.unified.DateRange(); };

/**
 * Removes a specialDate from the aggregation named <code>specialDates</code>.
 * @param {int | string | sap.ui.unified.DateTypeRange} vSpecialDate The specialDateto remove or its index or id
 * @returns {sap.ui.unified.DateTypeRange} The removed specialDate or <code>null</code>
 * @public
 * 
 */
sap.ui.unified.calendar.TimesRow.prototype.removeSpecialDate = function(vSpecialDate) { return new sap.ui.unified.DateTypeRange(); };

/**
 * Sets a new value for property <code>date</code>.
 * 
 * A date as JavaScript Date object. The month including this date is rendered and this date is focused initially (if no other focus is set).
 * If the date property is not in the range <code>startDate</code> + <code>items</code> in the rendering phase,
 * it is set to the <code>startDate</code>.
 * So after setting the <code>startDate</code> the date should be set to be in the visible range.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {object} oDate New value for property <code>date</code>
 * @returns {sap.ui.unified.calendar.TimesRow} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.calendar.TimesRow.prototype.setDate = function(oDate) { return new sap.ui.unified.calendar.TimesRow(); };

/**
 * Sets a new value for property <code>intervalMinutes</code>.
 * 
 * Size of on time interval in minutes, default is 60 minutes.
 * 
 * <b>Note:</b> the start of the interval calculation is always <code>startDat</code> at 00:00.
 * 
 * A interval longer then 720 minutes is not allowed. Please use the <code>DatesRow</code> instead.
 * 
 * A day must be divisible by this interval size. One interval must not include more than one day.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>60</code>.
 * @param {int} iIntervalMinutes New value for property <code>intervalMinutes</code>
 * @returns {sap.ui.unified.calendar.TimesRow} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.calendar.TimesRow.prototype.setIntervalMinutes = function(iIntervalMinutes) { return new sap.ui.unified.calendar.TimesRow(); };

/**
 * Sets a new value for property <code>intervalSelection</code>.
 * 
 * If set, interval selection is allowed
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bIntervalSelection New value for property <code>intervalSelection</code>
 * @returns {sap.ui.unified.calendar.TimesRow} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.calendar.TimesRow.prototype.setIntervalSelection = function(bIntervalSelection) { return new sap.ui.unified.calendar.TimesRow(); };

/**
 * Sets a new value for property <code>items</code>.
 * 
 * Number of time items displayed
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>12</code>.
 * @param {int} iItems New value for property <code>items</code>
 * @returns {sap.ui.unified.calendar.TimesRow} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.calendar.TimesRow.prototype.setItems = function(iItems) { return new sap.ui.unified.calendar.TimesRow(); };

/**
 * Sets a new value for property <code>showHeader</code>.
 * 
 * If set, a header with the years is shown to visualize what month belongs to what year.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bShowHeader New value for property <code>showHeader</code>
 * @returns {sap.ui.unified.calendar.TimesRow} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.calendar.TimesRow.prototype.setShowHeader = function(bShowHeader) { return new sap.ui.unified.calendar.TimesRow(); };

/**
 * Sets a new value for property <code>singleSelection</code>.
 * 
 * If set, only a single month or interval, if intervalSelection is enabled, can be selected
 * 
 * <b>Note:</b> Selection of multiple intervals is not supported in the current version.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bSingleSelection New value for property <code>singleSelection</code>
 * @returns {sap.ui.unified.calendar.TimesRow} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.calendar.TimesRow.prototype.setSingleSelection = function(bSingleSelection) { return new sap.ui.unified.calendar.TimesRow(); };

/**
 * Sets a new value for property <code>startDate</code>.
 * 
 * Start date, as JavaScript Date object, of the row.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {object} oStartDate New value for property <code>startDate</code>
 * @returns {sap.ui.unified.calendar.TimesRow} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.calendar.TimesRow.prototype.setStartDate = function(oStartDate) { return new sap.ui.unified.calendar.TimesRow(); };


// ---- sap.ui.unified.calendar.YearPicker --------------------------------------------------------------------------

/**
 * Constructor for a new YearPicker.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getYear year} : int (default: 2000)</li>
 * <li>{@link #getYears years} : int (default: 20)</li>
 * <li>{@link #getColumns columns} : int (default: 4)</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:select select} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * renders a YearPicker with ItemNavigation
 * This is used inside the calendar. Not for stand alone usage
 * @extends sap.ui.core.Control
 * @version 1.32.7
 * @constructor
 * @public
 * @since 1.28.0
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.unified.calendar.YearPicker = function(sId,mSettings) {};
/**
 * Month selection changed
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.unified.calendar.YearPicker.prototype.select = function(oControlEvent) {  };

/**
 * Attaches event handler <code>fnFunction</code> to the 'select' event of this <code>sap.ui.unified.calendar.YearPicker</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise it will be bound to this <code>sap.ui.unified.calendar.YearPicker</code> itself.
 * 
 * Month selection changed
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to be called when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.unified.calendar.YearPicker</code> itself.
 * @returns {sap.ui.unified.calendar.YearPicker} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.calendar.YearPicker.prototype.attachSelect = function(oData,fnFunction,oListener) { return new sap.ui.unified.calendar.YearPicker(); };

/**
 * Detaches event handler <code>fnFunction</code> from the 'select' event of this <code>sap.ui.unified.calendar.YearPicker</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @returns {sap.ui.unified.calendar.YearPicker} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.calendar.YearPicker.prototype.detachSelect = function(fnFunction,oListener) { return new sap.ui.unified.calendar.YearPicker(); };

/**
 * Creates a new subclass of class sap.ui.unified.calendar.YearPicker with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object. If not given, it defaults to <code>sap.ui.core.ElementMetadata</code>.
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.unified.calendar.YearPicker.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event select to attached listeners.
 * @param {Map} [mArguments] The arguments to pass along with the event.
 * @returns {sap.ui.unified.calendar.YearPicker} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.unified.calendar.YearPicker.prototype.fireSelect = function(mArguments) { return new sap.ui.unified.calendar.YearPicker(); };

/**
 * Gets current value of property <code>columns</code>.
 * 
 * number of years in each row
 * 0 means just to have all years in one row, independent of the number
 * 
 * Default value is <code>4</code>.
 * @returns {int} Value of property <code>columns</code>
 * @since 1.30.0
 * @public
 * 
 */
sap.ui.unified.calendar.YearPicker.prototype.getColumns = function() { return 0; };

/**
 * Returns a metadata object for class sap.ui.unified.calendar.YearPicker.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.unified.calendar.YearPicker.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property <code>year</code>.
 * 
 * The year is initial focused and selected
 * The value must be between 0 and 9999
 * 
 * Default value is <code>2000</code>.
 * @returns {int} Value of property <code>year</code>
 * @public
 * 
 */
sap.ui.unified.calendar.YearPicker.prototype.getYear = function() { return 0; };

/**
 * Gets current value of property <code>years</code>.
 * 
 * number of displayed years
 * 
 * Default value is <code>20</code>.
 * @returns {int} Value of property <code>years</code>
 * @since 1.30.0
 * @public
 * 
 */
sap.ui.unified.calendar.YearPicker.prototype.getYears = function() { return 0; };

/**
 * displays the next page
 * @returns {sap.ui.unified.calendar.YearPicker} <code>this</code> to allow method chaining
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.unified.calendar.YearPicker.prototype.nextPage = function() { return new sap.ui.unified.calendar.YearPicker(); };

/**
 * displays the previous page
 * @returns {sap.ui.unified.calendar.YearPicker} <code>this</code> to allow method chaining
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.unified.calendar.YearPicker.prototype.previousPage = function() { return new sap.ui.unified.calendar.YearPicker(); };

/**
 * Sets a new value for property <code>columns</code>.
 * 
 * number of years in each row
 * 0 means just to have all years in one row, independent of the number
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>4</code>.
 * @param {int} iColumns New value for property <code>columns</code>
 * @returns {sap.ui.unified.calendar.YearPicker} Reference to <code>this</code> in order to allow method chaining
 * @since 1.30.0
 * @public
 * 
 */
sap.ui.unified.calendar.YearPicker.prototype.setColumns = function(iColumns) { return new sap.ui.unified.calendar.YearPicker(); };

/**
 * Sets a new value for property <code>year</code>.
 * 
 * The year is initial focused and selected
 * The value must be between 0 and 9999
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>2000</code>.
 * @param {int} iYear New value for property <code>year</code>
 * @returns {sap.ui.unified.calendar.YearPicker} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.calendar.YearPicker.prototype.setYear = function(iYear) { return new sap.ui.unified.calendar.YearPicker(); };

/**
 * Sets a new value for property <code>years</code>.
 * 
 * number of displayed years
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>20</code>.
 * @param {int} iYears New value for property <code>years</code>
 * @returns {sap.ui.unified.calendar.YearPicker} Reference to <code>this</code> in order to allow method chaining
 * @since 1.30.0
 * @public
 * 
 */
sap.ui.unified.calendar.YearPicker.prototype.setYears = function(iYears) { return new sap.ui.unified.calendar.YearPicker(); };


// ---- sap.ui.unified.CalendarDateInterval --------------------------------------------------------------------------

/**
 * Constructor for a new Calendar.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getStartDate startDate} : object</li>
 * <li>{@link #getDays days} : int (default: 7)</li>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.unified.Calendar#constructor sap.ui.unified.Calendar}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Calendar with dates displayed in one line.
 * @extends sap.ui.unified.Calendar
 * @version 1.32.7
 * @constructor
 * @public
 * @since 1.30.0
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.unified.CalendarDateInterval = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.ui.unified.CalendarDateInterval with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.unified.Calendar.extend}.
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object. If not given, it defaults to <code>sap.ui.core.ElementMetadata</code>.
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.unified.CalendarDateInterval.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property <code>days</code>.
 * 
 * number of days displayed
 * on phones the maximum rendered number of days is 8.
 * 
 * Default value is <code>7</code>.
 * @returns {int} Value of property <code>days</code>
 * @public
 * 
 */
sap.ui.unified.CalendarDateInterval.prototype.getDays = function() { return 0; };

/**
 * Returns a metadata object for class sap.ui.unified.CalendarDateInterval.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.unified.CalendarDateInterval.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property <code>startDate</code>.
 * 
 * Start date of the Interval
 * @returns {object} Value of property <code>startDate</code>
 * @public
 * 
 */
sap.ui.unified.CalendarDateInterval.prototype.getStartDate = function() { return new Object(); };

/**
 * Gets current value of property <code>width</code>.
 * 
 * Width of Calendar
 * @returns {sap.ui.core.CSSSize} Value of property <code>width</code>
 * @public
 * 
 */
sap.ui.unified.CalendarDateInterval.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * Sets a new value for property <code>days</code>.
 * 
 * number of days displayed
 * on phones the maximum rendered number of days is 8.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>7</code>.
 * @param {int} iDays New value for property <code>days</code>
 * @returns {sap.ui.unified.CalendarDateInterval} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.CalendarDateInterval.prototype.setDays = function(iDays) { return new sap.ui.unified.CalendarDateInterval(); };

/**
 * Setter for property <code>firstDayOfWeek</code>.
 * 
 * Property <code>firstDayOfWeek</code> is not supported in <code>sap.ui.unified.CalendarDateInterval</code> control.
 * @protected
 * @param {int} [iFirstDayOfWeek] first day of the week
 * 
 */
sap.ui.unified.CalendarDateInterval.prototype.setFirstDayOfWeek = function(iFirstDayOfWeek) {  };

/**
 * Setter for property <code>months</code>.
 * 
 * Property <code>months</code> is not supported in <code>sap.ui.unified.CalendarDateInterval</code> control.
 * @protected
 * @param {int} [iMonths] months
 * 
 */
sap.ui.unified.CalendarDateInterval.prototype.setMonths = function(iMonths) {  };

/**
 * Sets a new value for property <code>startDate</code>.
 * 
 * Start date of the Interval
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {object} oStartDate New value for property <code>startDate</code>
 * @returns {sap.ui.unified.CalendarDateInterval} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.CalendarDateInterval.prototype.setStartDate = function(oStartDate) { return new sap.ui.unified.CalendarDateInterval(); };

/**
 * Sets a new value for property <code>width</code>.
 * 
 * Width of Calendar
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {sap.ui.core.CSSSize} sWidth New value for property <code>width</code>
 * @returns {sap.ui.unified.CalendarDateInterval} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.CalendarDateInterval.prototype.setWidth = function(sWidth) { return new sap.ui.unified.CalendarDateInterval(); };


// ---- sap.ui.unified.CalendarDayType --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ui.unified.CalendarDayType.toString = function() { return ""; };

// ---- sap.ui.unified.CalendarLegend --------------------------------------------------------------------------

/**
 * Constructor for a new CalendarLegend.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getColumnWidth columnWidth} : sap.ui.core.CSSSize (default: 120px)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getItems items} : sap.ui.unified.CalendarLegendItem[]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * A legend for the Calendar Control. Displays special dates colors with their corresponding description. The aggregation specialDates can be set herefor.
 * @extends sap.ui.core.Control
 * @version 1.32.7
 * @constructor
 * @public
 * @since 1.24.0
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.unified.CalendarLegend = function(sId,mSettings) {};
/**
 * Adds some item into the aggregation named <code>items</code>.
 * @param {sap.ui.unified.CalendarLegendItem}
 *            oItem the item to add; to add; if empty, nothing is inserted
 * @returns {sap.ui.unified.CalendarLegend} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.CalendarLegend.prototype.addItem = function(oItem) { return new sap.ui.unified.CalendarLegend(); };

/**
 * Destroys all the items in the aggregation
 * named <code>items</code>.
 * @returns {sap.ui.unified.CalendarLegend} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.CalendarLegend.prototype.destroyItems = function() { return new sap.ui.unified.CalendarLegend(); };

/**
 * Creates a new subclass of class sap.ui.unified.CalendarLegend with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object. If not given, it defaults to <code>sap.ui.core.ElementMetadata</code>.
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.unified.CalendarLegend.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property <code>columnWidth</code>.
 * 
 * Width of the columns created in which the items are arranged.
 * 
 * Default value is <code>120px</code>.
 * @returns {sap.ui.core.CSSSize} Value of property <code>columnWidth</code>
 * @public
 * 
 */
sap.ui.unified.CalendarLegend.prototype.getColumnWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * Gets content of aggregation <code>items</code>.
 * 
 * Items to be displayed.
 * @returns {sap.ui.unified.CalendarLegendItem[]}
 * @public
 * 
 */
sap.ui.unified.CalendarLegend.prototype.getItems = function() { return new Array(); };

/**
 * Returns a metadata object for class sap.ui.unified.CalendarLegend.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.unified.CalendarLegend.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Checks for the provided <code>sap.ui.unified.CalendarLegendItem</code> in the aggregation named <code>items</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.unified.CalendarLegendItem}
 *           oItem The item whose index is looked for.
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.unified.CalendarLegend.prototype.indexOfItem = function(oItem) { return 0; };

/**
 * Inserts a item into the aggregation named <code>items</code>.
 * @param {sap.ui.unified.CalendarLegendItem}
 *            oItem the item to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the item should be inserted at; for
 *              a negative value of <code>iIndex</code>, the item is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the item is inserted at
 *              the last position
 * @returns {sap.ui.unified.CalendarLegend} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.CalendarLegend.prototype.insertItem = function(oItem,iIndex) { return new sap.ui.unified.CalendarLegend(); };

/**
 * Removes all the controls in the aggregation named <code>items</code>.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.unified.CalendarLegendItem[]} An array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.unified.CalendarLegend.prototype.removeAllItems = function() { return new Array(); };

/**
 * Removes a item from the aggregation named <code>items</code>.
 * @param {int | string | sap.ui.unified.CalendarLegendItem} vItem The itemto remove or its index or id
 * @returns {sap.ui.unified.CalendarLegendItem} The removed item or <code>null</code>
 * @public
 * 
 */
sap.ui.unified.CalendarLegend.prototype.removeItem = function(vItem) { return new sap.ui.unified.CalendarLegendItem(); };

/**
 * Sets a new value for property <code>columnWidth</code>.
 * 
 * Width of the columns created in which the items are arranged.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>120px</code>.
 * @param {sap.ui.core.CSSSize} sColumnWidth New value for property <code>columnWidth</code>
 * @returns {sap.ui.unified.CalendarLegend} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.CalendarLegend.prototype.setColumnWidth = function(sColumnWidth) { return new sap.ui.unified.CalendarLegend(); };


// ---- sap.ui.unified.CalendarLegendItem --------------------------------------------------------------------------

/**
 * Constructor for a new CalendarLegendItem.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getText text} : string</li>
 * <li>{@link #getType type} : sap.ui.unified.CalendarDayType (default: None)</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Item to be displayed in a CalendarLegend.
 * @extends sap.ui.core.Element
 * @version 1.32.7
 * @constructor
 * @public
 * @since 1.24.0
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.unified.CalendarLegendItem = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.ui.unified.CalendarLegendItem with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object. If not given, it defaults to <code>sap.ui.core.ElementMetadata</code>.
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.unified.CalendarLegendItem.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.ui.unified.CalendarLegendItem.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.unified.CalendarLegendItem.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property <code>text</code>.
 * 
 * Text to be displayed for the item.
 * @returns {string} Value of property <code>text</code>
 * @public
 * 
 */
sap.ui.unified.CalendarLegendItem.prototype.getText = function() { return ""; };

/**
 * Gets current value of property <code>type</code>.
 * 
 * Type of the item.
 * If not set the type is automatically determined from the order of the items in the CalendarLegend.
 * 
 * Default value is <code>None</code>.
 * @returns {sap.ui.unified.CalendarDayType} Value of property <code>type</code>
 * @since 1.28.9
 * @public
 * 
 */
sap.ui.unified.CalendarLegendItem.prototype.getType = function() { return new sap.ui.unified.CalendarDayType(); };

/**
 * Sets a new value for property <code>text</code>.
 * 
 * Text to be displayed for the item.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sText New value for property <code>text</code>
 * @returns {sap.ui.unified.CalendarLegendItem} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.CalendarLegendItem.prototype.setText = function(sText) { return new sap.ui.unified.CalendarLegendItem(); };

/**
 * Sets a new value for property <code>type</code>.
 * 
 * Type of the item.
 * If not set the type is automatically determined from the order of the items in the CalendarLegend.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>None</code>.
 * @param {sap.ui.unified.CalendarDayType} sType New value for property <code>type</code>
 * @returns {sap.ui.unified.CalendarLegendItem} Reference to <code>this</code> in order to allow method chaining
 * @since 1.28.9
 * @public
 * 
 */
sap.ui.unified.CalendarLegendItem.prototype.setType = function(sType) { return new sap.ui.unified.CalendarLegendItem(); };


// ---- sap.ui.unified.CalendarMonthInterval --------------------------------------------------------------------------

/**
 * Constructor for a new CalendarMonthInterval.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize</li>
 * <li>{@link #getStartDate startDate} : object</li>
 * <li>{@link #getIntervalSelection intervalSelection} : boolean (default: false)</li>
 * <li>{@link #getSingleSelection singleSelection} : boolean (default: true)</li>
 * <li>{@link #getMonths months} : int (default: 12)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getSelectedDates selectedDates} : sap.ui.unified.DateRange[]</li>
 * <li>{@link #getSpecialDates specialDates} : sap.ui.unified.DateTypeRange[]</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:select select} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:cancel cancel} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * @class
 * Calendar with granularity of months displayed in one line.
 * 
 * <b>Note:</b> JavaScript Date objects are used to set and return the months, mark them as selected or as a special type.
 * But the date part of the Date object is not used. If a Date object is returned the date will be set to the 1st of the corresponding month.
 * @extends sap.ui.core.Control
 * @version 1.32.7
 * @constructor
 * @public
 * @since 1.32.0
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.unified.CalendarMonthInterval = function(sId,mSettings) {};
/**
 * Month selection was cancelled
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.unified.CalendarMonthInterval.prototype.cancel = function(oControlEvent) {  };

/**
 * Month selection changed
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.unified.CalendarMonthInterval.prototype.select = function(oControlEvent) {  };

/**
 * Adds some ariaLabelledBy into the association named <code>ariaLabelledBy</code>.
 * @param {string | sap.ui.core.Control} vAriaLabelledBy the ariaLabelledBy to add; if empty, nothing is inserted
 * @returns {sap.ui.unified.CalendarMonthInterval} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.CalendarMonthInterval.prototype.addAriaLabelledBy = function(vAriaLabelledBy) { return new sap.ui.unified.CalendarMonthInterval(); };

/**
 * Adds some selectedDate into the aggregation named <code>selectedDates</code>.
 * @param {sap.ui.unified.DateRange}
 *            oSelectedDate the selectedDate to add; to add; if empty, nothing is inserted
 * @returns {sap.ui.unified.CalendarMonthInterval} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.CalendarMonthInterval.prototype.addSelectedDate = function(oSelectedDate) { return new sap.ui.unified.CalendarMonthInterval(); };

/**
 * Adds some specialDate into the aggregation named <code>specialDates</code>.
 * @param {sap.ui.unified.DateTypeRange}
 *            oSpecialDate the specialDate to add; to add; if empty, nothing is inserted
 * @returns {sap.ui.unified.CalendarMonthInterval} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.CalendarMonthInterval.prototype.addSpecialDate = function(oSpecialDate) { return new sap.ui.unified.CalendarMonthInterval(); };

/**
 * Attaches event handler <code>fnFunction</code> to the 'cancel' event of this <code>sap.ui.unified.CalendarMonthInterval</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise it will be bound to this <code>sap.ui.unified.CalendarMonthInterval</code> itself.
 * 
 * Month selection was cancelled
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to be called when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.unified.CalendarMonthInterval</code> itself.
 * @returns {sap.ui.unified.CalendarMonthInterval} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.CalendarMonthInterval.prototype.attachCancel = function(oData,fnFunction,oListener) { return new sap.ui.unified.CalendarMonthInterval(); };

/**
 * Attaches event handler <code>fnFunction</code> to the 'select' event of this <code>sap.ui.unified.CalendarMonthInterval</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise it will be bound to this <code>sap.ui.unified.CalendarMonthInterval</code> itself.
 * 
 * Month selection changed
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to be called when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.unified.CalendarMonthInterval</code> itself.
 * @returns {sap.ui.unified.CalendarMonthInterval} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.CalendarMonthInterval.prototype.attachSelect = function(oData,fnFunction,oListener) { return new sap.ui.unified.CalendarMonthInterval(); };

/**
 * Destroys all the selectedDates in the aggregation
 * named <code>selectedDates</code>.
 * @returns {sap.ui.unified.CalendarMonthInterval} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.CalendarMonthInterval.prototype.destroySelectedDates = function() { return new sap.ui.unified.CalendarMonthInterval(); };

/**
 * Destroys all the specialDates in the aggregation
 * named <code>specialDates</code>.
 * @returns {sap.ui.unified.CalendarMonthInterval} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.CalendarMonthInterval.prototype.destroySpecialDates = function() { return new sap.ui.unified.CalendarMonthInterval(); };

/**
 * Detaches event handler <code>fnFunction</code> from the 'cancel' event of this <code>sap.ui.unified.CalendarMonthInterval</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @returns {sap.ui.unified.CalendarMonthInterval} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.CalendarMonthInterval.prototype.detachCancel = function(fnFunction,oListener) { return new sap.ui.unified.CalendarMonthInterval(); };

/**
 * Detaches event handler <code>fnFunction</code> from the 'select' event of this <code>sap.ui.unified.CalendarMonthInterval</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @returns {sap.ui.unified.CalendarMonthInterval} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.CalendarMonthInterval.prototype.detachSelect = function(fnFunction,oListener) { return new sap.ui.unified.CalendarMonthInterval(); };

/**
 * Displays a month in the <code>CalendarMonthInterval</code> but doesn't set the focus.
 * @param {object} oDate JavaScript date object for displayed date. (The month of this date will be displayed.)
 * @returns {sap.ui.unified.Calendar} <code>this</code> to allow method chaining
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.unified.CalendarMonthInterval.prototype.displayDate = function(oDate) { return new sap.ui.unified.Calendar(); };

/**
 * Creates a new subclass of class sap.ui.unified.CalendarMonthInterval with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object. If not given, it defaults to <code>sap.ui.core.ElementMetadata</code>.
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.unified.CalendarMonthInterval.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event cancel to attached listeners.
 * @param {Map} [mArguments] The arguments to pass along with the event.
 * @returns {sap.ui.unified.CalendarMonthInterval} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.unified.CalendarMonthInterval.prototype.fireCancel = function(mArguments) { return new sap.ui.unified.CalendarMonthInterval(); };

/**
 * Fires event select to attached listeners.
 * @param {Map} [mArguments] The arguments to pass along with the event.
 * @returns {sap.ui.unified.CalendarMonthInterval} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.unified.CalendarMonthInterval.prototype.fireSelect = function(mArguments) { return new sap.ui.unified.CalendarMonthInterval(); };

/**
 * Sets the focused month of the <code>CalendarMonthInterval</code>.
 * @param {object} oDate JavaScript date object for focused date. (The month of this date will be focused.)
 * @returns {sap.ui.unified.Calendar} <code>this</code> to allow method chaining
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.unified.CalendarMonthInterval.prototype.focusDate = function(oDate) { return new sap.ui.unified.Calendar(); };

/**
 * Returns array of IDs of the elements which are the current targets of the <code>ariaLabelledBy</code> association.
 * 
 * Association to controls / IDs which label this control (see WAI-ARIA attribute aria-labelledby).
 * @returns {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.ui.unified.CalendarMonthInterval.prototype.getAriaLabelledBy = function() { return new Array(); };

/**
 * Gets current value of property <code>intervalSelection</code>.
 * 
 * If set, interval selection is allowed
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>intervalSelection</code>
 * @public
 * 
 */
sap.ui.unified.CalendarMonthInterval.prototype.getIntervalSelection = function() { return false; };

/**
 * Returns a metadata object for class sap.ui.unified.CalendarMonthInterval.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.unified.CalendarMonthInterval.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property <code>months</code>.
 * 
 * Number of months displayed
 * 
 * <b>Note:</b> On phones, the maximum number of months displayed in the row is always 6.
 * 
 * Default value is <code>12</code>.
 * @returns {int} Value of property <code>months</code>
 * @public
 * 
 */
sap.ui.unified.CalendarMonthInterval.prototype.getMonths = function() { return 0; };

/**
 * Gets content of aggregation <code>selectedDates</code>.
 * 
 * Date ranges for selected dates of the <code>CalendarMonthInterval</code>.
 * 
 * If <code>singleSelection</code> is set, only the first entry is used.
 * 
 * <b>Note:</b> Even if only one day is selected, the whole corresponding month is selected.
 * @returns {sap.ui.unified.DateRange[]}
 * @public
 * 
 */
sap.ui.unified.CalendarMonthInterval.prototype.getSelectedDates = function() { return new Array(); };

/**
 * Gets current value of property <code>singleSelection</code>.
 * 
 * If set, only a single date or interval, if <code>intervalSelection</code> is enabled, can be selected
 * 
 * <b>Note:</b> Selection of multiple intervals is not supported in the current version.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>singleSelection</code>
 * @public
 * 
 */
sap.ui.unified.CalendarMonthInterval.prototype.getSingleSelection = function() { return false; };

/**
 * Gets content of aggregation <code>specialDates</code>.
 * 
 * Date ranges with type to visualize special months in the <code>CalendarMonthInterval</code>.
 * If one day is assigned to more than one type, only the first one will be used.
 * 
 * <b>Note:</b> Even if only one day is set as a special day, the whole corresponding month is displayed in this way.
 * @returns {sap.ui.unified.DateTypeRange[]}
 * @public
 * 
 */
sap.ui.unified.CalendarMonthInterval.prototype.getSpecialDates = function() { return new Array(); };

/**
 * Gets current value of property <code>startDate</code>.
 * 
 * Start date of the Interval as JavaScript Date object.
 * The month of this Date will be the first month in the displayed row.
 * @returns {object} Value of property <code>startDate</code>
 * @public
 * 
 */
sap.ui.unified.CalendarMonthInterval.prototype.getStartDate = function() { return new Object(); };

/**
 * Gets current value of property <code>width</code>.
 * 
 * Width of the <code>CalendarMonthInterval</code>. The width of the single months depends on this width.
 * @returns {sap.ui.core.CSSSize} Value of property <code>width</code>
 * @public
 * 
 */
sap.ui.unified.CalendarMonthInterval.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * Checks for the provided <code>sap.ui.unified.DateRange</code> in the aggregation named <code>selectedDates</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.unified.DateRange}
 *           oSelectedDate The selectedDate whose index is looked for.
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.unified.CalendarMonthInterval.prototype.indexOfSelectedDate = function(oSelectedDate) { return 0; };

/**
 * Checks for the provided <code>sap.ui.unified.DateTypeRange</code> in the aggregation named <code>specialDates</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.unified.DateTypeRange}
 *           oSpecialDate The specialDate whose index is looked for.
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.unified.CalendarMonthInterval.prototype.indexOfSpecialDate = function(oSpecialDate) { return 0; };

/**
 * Inserts a selectedDate into the aggregation named <code>selectedDates</code>.
 * @param {sap.ui.unified.DateRange}
 *            oSelectedDate the selectedDate to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the selectedDate should be inserted at; for
 *              a negative value of <code>iIndex</code>, the selectedDate is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the selectedDate is inserted at
 *              the last position
 * @returns {sap.ui.unified.CalendarMonthInterval} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.CalendarMonthInterval.prototype.insertSelectedDate = function(oSelectedDate,iIndex) { return new sap.ui.unified.CalendarMonthInterval(); };

/**
 * Inserts a specialDate into the aggregation named <code>specialDates</code>.
 * @param {sap.ui.unified.DateTypeRange}
 *            oSpecialDate the specialDate to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the specialDate should be inserted at; for
 *              a negative value of <code>iIndex</code>, the specialDate is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the specialDate is inserted at
 *              the last position
 * @returns {sap.ui.unified.CalendarMonthInterval} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.CalendarMonthInterval.prototype.insertSpecialDate = function(oSpecialDate,iIndex) { return new sap.ui.unified.CalendarMonthInterval(); };

/**
 * Removes all the controls in the association named <code>ariaLabelledBy</code>.
 * @returns {sap.ui.core.Control[]} An array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.unified.CalendarMonthInterval.prototype.removeAllAriaLabelledBy = function() { return new Array(); };

/**
 * Removes all the controls in the aggregation named <code>selectedDates</code>.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.unified.DateRange[]} An array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.unified.CalendarMonthInterval.prototype.removeAllSelectedDates = function() { return new Array(); };

/**
 * Removes all the controls in the aggregation named <code>specialDates</code>.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.unified.DateTypeRange[]} An array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.unified.CalendarMonthInterval.prototype.removeAllSpecialDates = function() { return new Array(); };

/**
 * Removes an ariaLabelledBy from the association named <code>ariaLabelledBy</code>.
 * @param {int | string | sap.ui.core.Control} vAriaLabelledBy The ariaLabelledByto be removed or its index or ID
 * @returns {sap.ui.core.Control} the removed ariaLabelledBy or <code>null</code>
 * @public
 * 
 */
sap.ui.unified.CalendarMonthInterval.prototype.removeAriaLabelledBy = function(vAriaLabelledBy) { return new sap.ui.core.Control(); };

/**
 * Removes a selectedDate from the aggregation named <code>selectedDates</code>.
 * @param {int | string | sap.ui.unified.DateRange} vSelectedDate The selectedDateto remove or its index or id
 * @returns {sap.ui.unified.DateRange} The removed selectedDate or <code>null</code>
 * @public
 * 
 */
sap.ui.unified.CalendarMonthInterval.prototype.removeSelectedDate = function(vSelectedDate) { return new sap.ui.unified.DateRange(); };

/**
 * Removes a specialDate from the aggregation named <code>specialDates</code>.
 * @param {int | string | sap.ui.unified.DateTypeRange} vSpecialDate The specialDateto remove or its index or id
 * @returns {sap.ui.unified.DateTypeRange} The removed specialDate or <code>null</code>
 * @public
 * 
 */
sap.ui.unified.CalendarMonthInterval.prototype.removeSpecialDate = function(vSpecialDate) { return new sap.ui.unified.DateTypeRange(); };

/**
 * Sets a new value for property <code>intervalSelection</code>.
 * 
 * If set, interval selection is allowed
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bIntervalSelection New value for property <code>intervalSelection</code>
 * @returns {sap.ui.unified.CalendarMonthInterval} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.CalendarMonthInterval.prototype.setIntervalSelection = function(bIntervalSelection) { return new sap.ui.unified.CalendarMonthInterval(); };

/**
 * Sets a new value for property <code>months</code>.
 * 
 * Number of months displayed
 * 
 * <b>Note:</b> On phones, the maximum number of months displayed in the row is always 6.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>12</code>.
 * @param {int} iMonths New value for property <code>months</code>
 * @returns {sap.ui.unified.CalendarMonthInterval} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.CalendarMonthInterval.prototype.setMonths = function(iMonths) { return new sap.ui.unified.CalendarMonthInterval(); };

/**
 * Sets a new value for property <code>singleSelection</code>.
 * 
 * If set, only a single date or interval, if <code>intervalSelection</code> is enabled, can be selected
 * 
 * <b>Note:</b> Selection of multiple intervals is not supported in the current version.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bSingleSelection New value for property <code>singleSelection</code>
 * @returns {sap.ui.unified.CalendarMonthInterval} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.CalendarMonthInterval.prototype.setSingleSelection = function(bSingleSelection) { return new sap.ui.unified.CalendarMonthInterval(); };

/**
 * Sets a new value for property <code>startDate</code>.
 * 
 * Start date of the Interval as JavaScript Date object.
 * The month of this Date will be the first month in the displayed row.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {object} oStartDate New value for property <code>startDate</code>
 * @returns {sap.ui.unified.CalendarMonthInterval} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.CalendarMonthInterval.prototype.setStartDate = function(oStartDate) { return new sap.ui.unified.CalendarMonthInterval(); };

/**
 * Sets a new value for property <code>width</code>.
 * 
 * Width of the <code>CalendarMonthInterval</code>. The width of the single months depends on this width.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {sap.ui.core.CSSSize} sWidth New value for property <code>width</code>
 * @returns {sap.ui.unified.CalendarMonthInterval} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.CalendarMonthInterval.prototype.setWidth = function(sWidth) { return new sap.ui.unified.CalendarMonthInterval(); };


// ---- sap.ui.unified.CalendarTimeInterval --------------------------------------------------------------------------

/**
 * Constructor for a new CalendarTimeInterval.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize</li>
 * <li>{@link #getStartDate startDate} : object</li>
 * <li>{@link #getIntervalSelection intervalSelection} : boolean (default: false)</li>
 * <li>{@link #getSingleSelection singleSelection} : boolean (default: true)</li>
 * <li>{@link #getItems items} : int (default: 12)</li>
 * <li>{@link #getIntervalMinutes intervalMinutes} : int (default: 60)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getSelectedDates selectedDates} : sap.ui.unified.DateRange[]</li>
 * <li>{@link #getSpecialDates specialDates} : sap.ui.unified.DateTypeRange[]</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:select select} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:cancel cancel} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * @class
 * Calendar with granularity of time items displayed in one line.
 * @extends sap.ui.core.Control
 * @version 1.32.7
 * @constructor
 * @public
 * @since 1.32.0
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.unified.CalendarTimeInterval = function(sId,mSettings) {};
/**
 * Time selection was cancelled
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.unified.CalendarTimeInterval.prototype.cancel = function(oControlEvent) {  };

/**
 * Time selection changed
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.unified.CalendarTimeInterval.prototype.select = function(oControlEvent) {  };

/**
 * Adds some ariaLabelledBy into the association named <code>ariaLabelledBy</code>.
 * @param {string | sap.ui.core.Control} vAriaLabelledBy the ariaLabelledBy to add; if empty, nothing is inserted
 * @returns {sap.ui.unified.CalendarTimeInterval} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.CalendarTimeInterval.prototype.addAriaLabelledBy = function(vAriaLabelledBy) { return new sap.ui.unified.CalendarTimeInterval(); };

/**
 * Adds some selectedDate into the aggregation named <code>selectedDates</code>.
 * @param {sap.ui.unified.DateRange}
 *            oSelectedDate the selectedDate to add; to add; if empty, nothing is inserted
 * @returns {sap.ui.unified.CalendarTimeInterval} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.CalendarTimeInterval.prototype.addSelectedDate = function(oSelectedDate) { return new sap.ui.unified.CalendarTimeInterval(); };

/**
 * Adds some specialDate into the aggregation named <code>specialDates</code>.
 * @param {sap.ui.unified.DateTypeRange}
 *            oSpecialDate the specialDate to add; to add; if empty, nothing is inserted
 * @returns {sap.ui.unified.CalendarTimeInterval} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.CalendarTimeInterval.prototype.addSpecialDate = function(oSpecialDate) { return new sap.ui.unified.CalendarTimeInterval(); };

/**
 * Attaches event handler <code>fnFunction</code> to the 'cancel' event of this <code>sap.ui.unified.CalendarTimeInterval</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise it will be bound to this <code>sap.ui.unified.CalendarTimeInterval</code> itself.
 * 
 * Time selection was cancelled
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to be called when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.unified.CalendarTimeInterval</code> itself.
 * @returns {sap.ui.unified.CalendarTimeInterval} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.CalendarTimeInterval.prototype.attachCancel = function(oData,fnFunction,oListener) { return new sap.ui.unified.CalendarTimeInterval(); };

/**
 * Attaches event handler <code>fnFunction</code> to the 'select' event of this <code>sap.ui.unified.CalendarTimeInterval</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise it will be bound to this <code>sap.ui.unified.CalendarTimeInterval</code> itself.
 * 
 * Time selection changed
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to be called when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.unified.CalendarTimeInterval</code> itself.
 * @returns {sap.ui.unified.CalendarTimeInterval} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.CalendarTimeInterval.prototype.attachSelect = function(oData,fnFunction,oListener) { return new sap.ui.unified.CalendarTimeInterval(); };

/**
 * Destroys all the selectedDates in the aggregation
 * named <code>selectedDates</code>.
 * @returns {sap.ui.unified.CalendarTimeInterval} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.CalendarTimeInterval.prototype.destroySelectedDates = function() { return new sap.ui.unified.CalendarTimeInterval(); };

/**
 * Destroys all the specialDates in the aggregation
 * named <code>specialDates</code>.
 * @returns {sap.ui.unified.CalendarTimeInterval} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.CalendarTimeInterval.prototype.destroySpecialDates = function() { return new sap.ui.unified.CalendarTimeInterval(); };

/**
 * Detaches event handler <code>fnFunction</code> from the 'cancel' event of this <code>sap.ui.unified.CalendarTimeInterval</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @returns {sap.ui.unified.CalendarTimeInterval} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.CalendarTimeInterval.prototype.detachCancel = function(fnFunction,oListener) { return new sap.ui.unified.CalendarTimeInterval(); };

/**
 * Detaches event handler <code>fnFunction</code> from the 'select' event of this <code>sap.ui.unified.CalendarTimeInterval</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @returns {sap.ui.unified.CalendarTimeInterval} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.CalendarTimeInterval.prototype.detachSelect = function(fnFunction,oListener) { return new sap.ui.unified.CalendarTimeInterval(); };

/**
 * Displays a item in the <code>CalendarTimeInterval</code> but doesn't set the focus.
 * @param {object} oDate JavaScript date object for displayed item.
 * @returns {sap.ui.unified.Calendar} <code>this</code> to allow method chaining
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.unified.CalendarTimeInterval.prototype.displayDate = function(oDate) { return new sap.ui.unified.Calendar(); };

/**
 * Creates a new subclass of class sap.ui.unified.CalendarTimeInterval with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object. If not given, it defaults to <code>sap.ui.core.ElementMetadata</code>.
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.unified.CalendarTimeInterval.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event cancel to attached listeners.
 * @param {Map} [mArguments] The arguments to pass along with the event.
 * @returns {sap.ui.unified.CalendarTimeInterval} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.unified.CalendarTimeInterval.prototype.fireCancel = function(mArguments) { return new sap.ui.unified.CalendarTimeInterval(); };

/**
 * Fires event select to attached listeners.
 * @param {Map} [mArguments] The arguments to pass along with the event.
 * @returns {sap.ui.unified.CalendarTimeInterval} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.unified.CalendarTimeInterval.prototype.fireSelect = function(mArguments) { return new sap.ui.unified.CalendarTimeInterval(); };

/**
 * Sets the focused item of the <code>CalendarTimeInterval</code>.
 * @param {object} oDate JavaScript date object for focused item.
 * @returns {sap.ui.unified.Calendar} <code>this</code> to allow method chaining
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.unified.CalendarTimeInterval.prototype.focusDate = function(oDate) { return new sap.ui.unified.Calendar(); };

/**
 * Returns array of IDs of the elements which are the current targets of the <code>ariaLabelledBy</code> association.
 * 
 * Association to controls / IDs which label this control (see WAI-ARIA attribute aria-labelledby).
 * @returns {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.ui.unified.CalendarTimeInterval.prototype.getAriaLabelledBy = function() { return new Array(); };

/**
 * Gets current value of property <code>intervalMinutes</code>.
 * 
 * Size of on time interval in minutes, default is 60 minutes.
 * 
 * <b>Note:</b> the start of the interval calculation is always on the corresponding date at 00:00.
 * 
 * A interval longer then 720 minutes is not allowed. Please use the <code>CalendarDateInterval</code> instead.
 * 
 * A day must be divisible by this interval size. One interval must not include more than one day.
 * 
 * Default value is <code>60</code>.
 * @returns {int} Value of property <code>intervalMinutes</code>
 * @public
 * 
 */
sap.ui.unified.CalendarTimeInterval.prototype.getIntervalMinutes = function() { return 0; };

/**
 * Gets current value of property <code>intervalSelection</code>.
 * 
 * If set, interval selection is allowed
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>intervalSelection</code>
 * @public
 * 
 */
sap.ui.unified.CalendarTimeInterval.prototype.getIntervalSelection = function() { return false; };

/**
 * Gets current value of property <code>items</code>.
 * 
 * Number of time items displayed. Default is 12.
 * 
 * <b>Note:</b> On phones, the maximum number of items displayed in the row is always 6.
 * 
 * Default value is <code>12</code>.
 * @returns {int} Value of property <code>items</code>
 * @public
 * 
 */
sap.ui.unified.CalendarTimeInterval.prototype.getItems = function() { return 0; };

/**
 * Returns a metadata object for class sap.ui.unified.CalendarTimeInterval.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.unified.CalendarTimeInterval.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets content of aggregation <code>selectedDates</code>.
 * 
 * Date ranges for selected items of the <code>CalendarTimeInterval</code>.
 * 
 * If <code>singleSelection</code> is set, only the first entry is used.
 * @returns {sap.ui.unified.DateRange[]}
 * @public
 * 
 */
sap.ui.unified.CalendarTimeInterval.prototype.getSelectedDates = function() { return new Array(); };

/**
 * Gets current value of property <code>singleSelection</code>.
 * 
 * If set, only a single date or interval, if <code>intervalSelection</code> is enabled, can be selected
 * 
 * <b>Note:</b> Selection of multiple intervals is not supported in the current version.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>singleSelection</code>
 * @public
 * 
 */
sap.ui.unified.CalendarTimeInterval.prototype.getSingleSelection = function() { return false; };

/**
 * Gets content of aggregation <code>specialDates</code>.
 * 
 * Date ranges with type to visualize special items in the <code>CalendarTimeInterval</code>.
 * If one interval is assigned to more than one type, only the first one will be used.
 * @returns {sap.ui.unified.DateTypeRange[]}
 * @public
 * 
 */
sap.ui.unified.CalendarTimeInterval.prototype.getSpecialDates = function() { return new Array(); };

/**
 * Gets current value of property <code>startDate</code>.
 * 
 * Start date of the Interval as JavaScript Date object.
 * The time interval corresponding to this Date and <code>items</code> and <code>intervalMinutes</code>
 * will be the first time in the displayed row.
 * @returns {object} Value of property <code>startDate</code>
 * @public
 * 
 */
sap.ui.unified.CalendarTimeInterval.prototype.getStartDate = function() { return new Object(); };

/**
 * Gets current value of property <code>width</code>.
 * 
 * Width of the <code>CalendarTimeInterval</code>. The width of the single months depends on this width.
 * @returns {sap.ui.core.CSSSize} Value of property <code>width</code>
 * @public
 * 
 */
sap.ui.unified.CalendarTimeInterval.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * Checks for the provided <code>sap.ui.unified.DateRange</code> in the aggregation named <code>selectedDates</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.unified.DateRange}
 *           oSelectedDate The selectedDate whose index is looked for.
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.unified.CalendarTimeInterval.prototype.indexOfSelectedDate = function(oSelectedDate) { return 0; };

/**
 * Checks for the provided <code>sap.ui.unified.DateTypeRange</code> in the aggregation named <code>specialDates</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.unified.DateTypeRange}
 *           oSpecialDate The specialDate whose index is looked for.
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.unified.CalendarTimeInterval.prototype.indexOfSpecialDate = function(oSpecialDate) { return 0; };

/**
 * Inserts a selectedDate into the aggregation named <code>selectedDates</code>.
 * @param {sap.ui.unified.DateRange}
 *            oSelectedDate the selectedDate to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the selectedDate should be inserted at; for
 *              a negative value of <code>iIndex</code>, the selectedDate is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the selectedDate is inserted at
 *              the last position
 * @returns {sap.ui.unified.CalendarTimeInterval} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.CalendarTimeInterval.prototype.insertSelectedDate = function(oSelectedDate,iIndex) { return new sap.ui.unified.CalendarTimeInterval(); };

/**
 * Inserts a specialDate into the aggregation named <code>specialDates</code>.
 * @param {sap.ui.unified.DateTypeRange}
 *            oSpecialDate the specialDate to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the specialDate should be inserted at; for
 *              a negative value of <code>iIndex</code>, the specialDate is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the specialDate is inserted at
 *              the last position
 * @returns {sap.ui.unified.CalendarTimeInterval} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.CalendarTimeInterval.prototype.insertSpecialDate = function(oSpecialDate,iIndex) { return new sap.ui.unified.CalendarTimeInterval(); };

/**
 * Removes all the controls in the association named <code>ariaLabelledBy</code>.
 * @returns {sap.ui.core.Control[]} An array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.unified.CalendarTimeInterval.prototype.removeAllAriaLabelledBy = function() { return new Array(); };

/**
 * Removes all the controls in the aggregation named <code>selectedDates</code>.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.unified.DateRange[]} An array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.unified.CalendarTimeInterval.prototype.removeAllSelectedDates = function() { return new Array(); };

/**
 * Removes all the controls in the aggregation named <code>specialDates</code>.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.unified.DateTypeRange[]} An array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.unified.CalendarTimeInterval.prototype.removeAllSpecialDates = function() { return new Array(); };

/**
 * Removes an ariaLabelledBy from the association named <code>ariaLabelledBy</code>.
 * @param {int | string | sap.ui.core.Control} vAriaLabelledBy The ariaLabelledByto be removed or its index or ID
 * @returns {sap.ui.core.Control} the removed ariaLabelledBy or <code>null</code>
 * @public
 * 
 */
sap.ui.unified.CalendarTimeInterval.prototype.removeAriaLabelledBy = function(vAriaLabelledBy) { return new sap.ui.core.Control(); };

/**
 * Removes a selectedDate from the aggregation named <code>selectedDates</code>.
 * @param {int | string | sap.ui.unified.DateRange} vSelectedDate The selectedDateto remove or its index or id
 * @returns {sap.ui.unified.DateRange} The removed selectedDate or <code>null</code>
 * @public
 * 
 */
sap.ui.unified.CalendarTimeInterval.prototype.removeSelectedDate = function(vSelectedDate) { return new sap.ui.unified.DateRange(); };

/**
 * Removes a specialDate from the aggregation named <code>specialDates</code>.
 * @param {int | string | sap.ui.unified.DateTypeRange} vSpecialDate The specialDateto remove or its index or id
 * @returns {sap.ui.unified.DateTypeRange} The removed specialDate or <code>null</code>
 * @public
 * 
 */
sap.ui.unified.CalendarTimeInterval.prototype.removeSpecialDate = function(vSpecialDate) { return new sap.ui.unified.DateTypeRange(); };

/**
 * Sets a new value for property <code>intervalMinutes</code>.
 * 
 * Size of on time interval in minutes, default is 60 minutes.
 * 
 * <b>Note:</b> the start of the interval calculation is always on the corresponding date at 00:00.
 * 
 * A interval longer then 720 minutes is not allowed. Please use the <code>CalendarDateInterval</code> instead.
 * 
 * A day must be divisible by this interval size. One interval must not include more than one day.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>60</code>.
 * @param {int} iIntervalMinutes New value for property <code>intervalMinutes</code>
 * @returns {sap.ui.unified.CalendarTimeInterval} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.CalendarTimeInterval.prototype.setIntervalMinutes = function(iIntervalMinutes) { return new sap.ui.unified.CalendarTimeInterval(); };

/**
 * Sets a new value for property <code>intervalSelection</code>.
 * 
 * If set, interval selection is allowed
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bIntervalSelection New value for property <code>intervalSelection</code>
 * @returns {sap.ui.unified.CalendarTimeInterval} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.CalendarTimeInterval.prototype.setIntervalSelection = function(bIntervalSelection) { return new sap.ui.unified.CalendarTimeInterval(); };

/**
 * Sets a new value for property <code>items</code>.
 * 
 * Number of time items displayed. Default is 12.
 * 
 * <b>Note:</b> On phones, the maximum number of items displayed in the row is always 6.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>12</code>.
 * @param {int} iItems New value for property <code>items</code>
 * @returns {sap.ui.unified.CalendarTimeInterval} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.CalendarTimeInterval.prototype.setItems = function(iItems) { return new sap.ui.unified.CalendarTimeInterval(); };

/**
 * Sets a new value for property <code>singleSelection</code>.
 * 
 * If set, only a single date or interval, if <code>intervalSelection</code> is enabled, can be selected
 * 
 * <b>Note:</b> Selection of multiple intervals is not supported in the current version.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bSingleSelection New value for property <code>singleSelection</code>
 * @returns {sap.ui.unified.CalendarTimeInterval} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.CalendarTimeInterval.prototype.setSingleSelection = function(bSingleSelection) { return new sap.ui.unified.CalendarTimeInterval(); };

/**
 * Sets a new value for property <code>startDate</code>.
 * 
 * Start date of the Interval as JavaScript Date object.
 * The time interval corresponding to this Date and <code>items</code> and <code>intervalMinutes</code>
 * will be the first time in the displayed row.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {object} oStartDate New value for property <code>startDate</code>
 * @returns {sap.ui.unified.CalendarTimeInterval} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.CalendarTimeInterval.prototype.setStartDate = function(oStartDate) { return new sap.ui.unified.CalendarTimeInterval(); };

/**
 * Sets a new value for property <code>width</code>.
 * 
 * Width of the <code>CalendarTimeInterval</code>. The width of the single months depends on this width.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {sap.ui.core.CSSSize} sWidth New value for property <code>width</code>
 * @returns {sap.ui.unified.CalendarTimeInterval} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.CalendarTimeInterval.prototype.setWidth = function(sWidth) { return new sap.ui.unified.CalendarTimeInterval(); };


// ---- sap.ui.unified.ContentSwitcher --------------------------------------------------------------------------

/**
 * Constructor for a new ContentSwitcher.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getAnimation animation} : string (default: None)</li>
 * <li>{@link #getActiveContent activeContent} : int (default: 1)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getContent1 content1} : sap.ui.core.Control[]</li>
 * <li>{@link #getContent2 content2} : sap.ui.core.Control[]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Switches between two control areas and animates it via CSS transitions
 * @extends sap.ui.core.Control
 * @version 1.32.7
 * @constructor
 * @public
 * @since 1.16.0
 * @experimental Since version 1.16.0. 
 * API is not yet finished and might change completely
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.unified.ContentSwitcher = function(sId,mSettings) {};
/**
 * Adds some content1 into the aggregation named <code>content1</code>.
 * @param {sap.ui.core.Control}
 *            oContent1 the content1 to add; to add; if empty, nothing is inserted
 * @returns {sap.ui.unified.ContentSwitcher} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.ContentSwitcher.prototype.addContent1 = function(oContent1) { return new sap.ui.unified.ContentSwitcher(); };

/**
 * Adds some content2 into the aggregation named <code>content2</code>.
 * @param {sap.ui.core.Control}
 *            oContent2 the content2 to add; to add; if empty, nothing is inserted
 * @returns {sap.ui.unified.ContentSwitcher} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.ContentSwitcher.prototype.addContent2 = function(oContent2) { return new sap.ui.unified.ContentSwitcher(); };

/**
 * Destroys all the content1 in the aggregation
 * named <code>content1</code>.
 * @returns {sap.ui.unified.ContentSwitcher} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.ContentSwitcher.prototype.destroyContent1 = function() { return new sap.ui.unified.ContentSwitcher(); };

/**
 * Destroys all the content2 in the aggregation
 * named <code>content2</code>.
 * @returns {sap.ui.unified.ContentSwitcher} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.ContentSwitcher.prototype.destroyContent2 = function() { return new sap.ui.unified.ContentSwitcher(); };

/**
 * Creates a new subclass of class sap.ui.unified.ContentSwitcher with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object. If not given, it defaults to <code>sap.ui.core.ElementMetadata</code>.
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.unified.ContentSwitcher.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property <code>activeContent</code>.
 * 
 * The number of the currently active content (1 or 2).
 * 
 * Default value is <code>1</code>.
 * @returns {int} Value of property <code>activeContent</code>
 * @public
 * 
 */
sap.ui.unified.ContentSwitcher.prototype.getActiveContent = function() { return 0; };

/**
 * Gets current value of property <code>animation</code>.
 * 
 * Set the used animation when changing content. This just sets a CSS-class named "sapUiUnifiedACSwitcherAnimation" + this value on the root element of the control. The animation has to be implemented in CSS. This also enables applications to implement their own animations via CSS by reacting to the parent class.
 * See the types sap.ui.unified.ContentSwitcherAnimation for default implementations.
 * 
 * Default value is <code>None</code>.
 * @returns {string} Value of property <code>animation</code>
 * @public
 * 
 */
sap.ui.unified.ContentSwitcher.prototype.getAnimation = function() { return ""; };

/**
 * Gets content of aggregation <code>content1</code>.
 * 
 * The controls that should be shown in the first content
 * @returns {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.ui.unified.ContentSwitcher.prototype.getContent1 = function() { return new Array(); };

/**
 * Gets content of aggregation <code>content2</code>.
 * 
 * The controls that should be shown in the second content
 * @returns {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.ui.unified.ContentSwitcher.prototype.getContent2 = function() { return new Array(); };

/**
 * Returns a metadata object for class sap.ui.unified.ContentSwitcher.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.unified.ContentSwitcher.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>content1</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *           oContent1 The content1 whose index is looked for.
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.unified.ContentSwitcher.prototype.indexOfContent1 = function(oContent1) { return 0; };

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>content2</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *           oContent2 The content2 whose index is looked for.
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.unified.ContentSwitcher.prototype.indexOfContent2 = function(oContent2) { return 0; };

/**
 * Inserts a content1 into the aggregation named <code>content1</code>.
 * @param {sap.ui.core.Control}
 *            oContent1 the content1 to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the content1 should be inserted at; for
 *              a negative value of <code>iIndex</code>, the content1 is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the content1 is inserted at
 *              the last position
 * @returns {sap.ui.unified.ContentSwitcher} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.ContentSwitcher.prototype.insertContent1 = function(oContent1,iIndex) { return new sap.ui.unified.ContentSwitcher(); };

/**
 * Inserts a content2 into the aggregation named <code>content2</code>.
 * @param {sap.ui.core.Control}
 *            oContent2 the content2 to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the content2 should be inserted at; for
 *              a negative value of <code>iIndex</code>, the content2 is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the content2 is inserted at
 *              the last position
 * @returns {sap.ui.unified.ContentSwitcher} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.ContentSwitcher.prototype.insertContent2 = function(oContent2,iIndex) { return new sap.ui.unified.ContentSwitcher(); };

/**
 * Removes all the controls in the aggregation named <code>content1</code>.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.core.Control[]} An array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.unified.ContentSwitcher.prototype.removeAllContent1 = function() { return new Array(); };

/**
 * Removes all the controls in the aggregation named <code>content2</code>.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.core.Control[]} An array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.unified.ContentSwitcher.prototype.removeAllContent2 = function() { return new Array(); };

/**
 * Removes a content1 from the aggregation named <code>content1</code>.
 * @param {int | string | sap.ui.core.Control} vContent1 The content1to remove or its index or id
 * @returns {sap.ui.core.Control} The removed content1 or <code>null</code>
 * @public
 * 
 */
sap.ui.unified.ContentSwitcher.prototype.removeContent1 = function(vContent1) { return new sap.ui.core.Control(); };

/**
 * Removes a content2 from the aggregation named <code>content2</code>.
 * @param {int | string | sap.ui.core.Control} vContent2 The content2to remove or its index or id
 * @returns {sap.ui.core.Control} The removed content2 or <code>null</code>
 * @public
 * 
 */
sap.ui.unified.ContentSwitcher.prototype.removeContent2 = function(vContent2) { return new sap.ui.core.Control(); };

/**
 * Sets a new value for property <code>activeContent</code>.
 * 
 * The number of the currently active content (1 or 2).
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>1</code>.
 * @param {int} iActiveContent New value for property <code>activeContent</code>
 * @returns {sap.ui.unified.ContentSwitcher} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.ContentSwitcher.prototype.setActiveContent = function(iActiveContent) { return new sap.ui.unified.ContentSwitcher(); };

/**
 * Sets a new value for property <code>animation</code>.
 * 
 * Set the used animation when changing content. This just sets a CSS-class named "sapUiUnifiedACSwitcherAnimation" + this value on the root element of the control. The animation has to be implemented in CSS. This also enables applications to implement their own animations via CSS by reacting to the parent class.
 * See the types sap.ui.unified.ContentSwitcherAnimation for default implementations.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>None</code>.
 * @param {string} sAnimation New value for property <code>animation</code>
 * @returns {sap.ui.unified.ContentSwitcher} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.ContentSwitcher.prototype.setAnimation = function(sAnimation) { return new sap.ui.unified.ContentSwitcher(); };

/**
 * Changes the currently active content to the other one. If content 1 is active, content 2 will
 * be activated and the other way around.
 * @public
 * 
 */
sap.ui.unified.ContentSwitcher.prototype.switchContent = function() {  };


// ---- sap.ui.unified.ContentSwitcherAnimation --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ui.unified.ContentSwitcherAnimation.toString = function() { return ""; };

// ---- sap.ui.unified.Currency --------------------------------------------------------------------------

/**
 * Constructor for a new Currency.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getValue value} : float (default: 0)</li>
 * <li>{@link #getCurrency currency} : string</li>
 * <li>{@link #getMaxPrecision maxPrecision} : int (default: 3)</li>
 * <li>{@link #getUseSymbol useSymbol} : boolean (default: true)</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * A text view which displays currency values and aligns them at the separator
 * @extends sap.ui.core.Control
 * @version 1.32.7
 * @constructor
 * @public
 * @since 1.21.1
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.unified.Currency = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.ui.unified.Currency with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object. If not given, it defaults to <code>sap.ui.core.ElementMetadata</code>.
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.unified.Currency.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property <code>currency</code>.
 * 
 * The ISO 4217 currency code
 * @returns {string} Value of property <code>currency</code>
 * @public
 * 
 */
sap.ui.unified.Currency.prototype.getCurrency = function() { return ""; };

/**
 * Get symbol of the currency, if available
 * @type string
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.unified.Currency.prototype.getCurrencySymbol = function() { return ""; };

/**
 * The formatted value
 * @type string
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.unified.Currency.prototype.getFormattedValue = function() { return ""; };

/**
 * Gets current value of property <code>maxPrecision</code>.
 * 
 * Defines the space that is available for the precision of the various currencies.
 * 
 * Default value is <code>3</code>.
 * @returns {int} Value of property <code>maxPrecision</code>
 * @public
 * 
 */
sap.ui.unified.Currency.prototype.getMaxPrecision = function() { return 0; };

/**
 * Returns a metadata object for class sap.ui.unified.Currency.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.unified.Currency.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property <code>useSymbol</code>.
 * 
 * Show the currency symbol instead of the ISO currency code
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>useSymbol</code>
 * @public
 * 
 */
sap.ui.unified.Currency.prototype.getUseSymbol = function() { return false; };

/**
 * Gets current value of property <code>value</code>.
 * 
 * The currency value
 * 
 * Default value is <code>0</code>.
 * @returns {float} Value of property <code>value</code>
 * @public
 * 
 */
sap.ui.unified.Currency.prototype.getValue = function() { return 0.0; };

/**
 * Sets a new value for property <code>currency</code>.
 * 
 * The ISO 4217 currency code
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sCurrency New value for property <code>currency</code>
 * @returns {sap.ui.unified.Currency} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.Currency.prototype.setCurrency = function(sCurrency) { return new sap.ui.unified.Currency(); };

/**
 * Sets a new value for property <code>maxPrecision</code>.
 * 
 * Defines the space that is available for the precision of the various currencies.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>3</code>.
 * @param {int} iMaxPrecision New value for property <code>maxPrecision</code>
 * @returns {sap.ui.unified.Currency} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.Currency.prototype.setMaxPrecision = function(iMaxPrecision) { return new sap.ui.unified.Currency(); };

/**
 * Sets a new value for property <code>useSymbol</code>.
 * 
 * Show the currency symbol instead of the ISO currency code
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bUseSymbol New value for property <code>useSymbol</code>
 * @returns {sap.ui.unified.Currency} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.Currency.prototype.setUseSymbol = function(bUseSymbol) { return new sap.ui.unified.Currency(); };

/**
 * Sets a new value for property <code>value</code>.
 * 
 * The currency value
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>0</code>.
 * @param {float} fValue New value for property <code>value</code>
 * @returns {sap.ui.unified.Currency} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.Currency.prototype.setValue = function(fValue) { return new sap.ui.unified.Currency(); };


// ---- sap.ui.unified.DateRange --------------------------------------------------------------------------

/**
 * Constructor for a new DateRange.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getStartDate startDate} : object</li>
 * <li>{@link #getEndDate endDate} : object</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Date range for use in DatePicker
 * @extends sap.ui.core.Element
 * @version 1.32.7
 * @constructor
 * @public
 * @since 1.22.0
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.unified.DateRange = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.ui.unified.DateRange with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object. If not given, it defaults to <code>sap.ui.core.ElementMetadata</code>.
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.unified.DateRange.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property <code>endDate</code>.
 * 
 * Start date for a date range. If empty only a single date is presented by this DateRange element. This must be a JavaScript date object.
 * @returns {object} Value of property <code>endDate</code>
 * @public
 * 
 */
sap.ui.unified.DateRange.prototype.getEndDate = function() { return new Object(); };

/**
 * Returns a metadata object for class sap.ui.unified.DateRange.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.unified.DateRange.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property <code>startDate</code>.
 * 
 * Start date for a date range. This must be a JavaScript date object.
 * @returns {object} Value of property <code>startDate</code>
 * @public
 * 
 */
sap.ui.unified.DateRange.prototype.getStartDate = function() { return new Object(); };

/**
 * Sets a new value for property <code>endDate</code>.
 * 
 * Start date for a date range. If empty only a single date is presented by this DateRange element. This must be a JavaScript date object.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {object} oEndDate New value for property <code>endDate</code>
 * @returns {sap.ui.unified.DateRange} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.DateRange.prototype.setEndDate = function(oEndDate) { return new sap.ui.unified.DateRange(); };

/**
 * Sets a new value for property <code>startDate</code>.
 * 
 * Start date for a date range. This must be a JavaScript date object.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {object} oStartDate New value for property <code>startDate</code>
 * @returns {sap.ui.unified.DateRange} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.DateRange.prototype.setStartDate = function(oStartDate) { return new sap.ui.unified.DateRange(); };


// ---- sap.ui.unified.DateTypeRange --------------------------------------------------------------------------

/**
 * Constructor for a new DateTypeRange.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getType type} : sap.ui.unified.CalendarDayType (default: Type01)</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.unified.DateRange#constructor sap.ui.unified.DateRange}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Date range with calendar day type information. Used to visualize special days in the Calendar.
 * @extends sap.ui.unified.DateRange
 * @version 1.32.7
 * @constructor
 * @public
 * @since 1.24.0
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.unified.DateTypeRange = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.ui.unified.DateTypeRange with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.unified.DateRange.extend}.
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object. If not given, it defaults to <code>sap.ui.core.ElementMetadata</code>.
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.unified.DateTypeRange.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.ui.unified.DateTypeRange.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.unified.DateTypeRange.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property <code>type</code>.
 * 
 * Type of the date range.
 * 
 * Default value is <code>Type01</code>.
 * @returns {sap.ui.unified.CalendarDayType} Value of property <code>type</code>
 * @public
 * 
 */
sap.ui.unified.DateTypeRange.prototype.getType = function() { return new sap.ui.unified.CalendarDayType(); };

/**
 * Sets a new value for property <code>type</code>.
 * 
 * Type of the date range.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Type01</code>.
 * @param {sap.ui.unified.CalendarDayType} sType New value for property <code>type</code>
 * @returns {sap.ui.unified.DateTypeRange} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.DateTypeRange.prototype.setType = function(sType) { return new sap.ui.unified.DateTypeRange(); };


// ---- sap.ui.unified.FileUploader --------------------------------------------------------------------------

/**
 * Constructor for a new FileUploader.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getValue value} : string (default: )</li>
 * <li>{@link #getEnabled enabled} : boolean (default: true)</li>
 * <li>{@link #getUploadUrl uploadUrl} : sap.ui.core.URI (default: )</li>
 * <li>{@link #getName name} : string</li>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize (default: )</li>
 * <li>{@link #getUploadOnChange uploadOnChange} : boolean (default: false)</li>
 * <li>{@link #getAdditionalData additionalData} : string</li>
 * <li>{@link #getSameFilenameAllowed sameFilenameAllowed} : boolean (default: false)</li>
 * <li>{@link #getButtonText buttonText} : string</li>
 * <li>{@link #getFileType fileType} : string[]</li>
 * <li>{@link #getMultiple multiple} : boolean (default: false)</li>
 * <li>{@link #getMaximumFileSize maximumFileSize} : float</li>
 * <li>{@link #getMimeType mimeType} : string[]</li>
 * <li>{@link #getSendXHR sendXHR} : boolean (default: false)</li>
 * <li>{@link #getPlaceholder placeholder} : string</li>
 * <li>{@link #getStyle style} : string</li>
 * <li>{@link #getButtonOnly buttonOnly} : boolean (default: false)</li>
 * <li>{@link #getUseMultipart useMultipart} : boolean (default: true)</li>
 * <li>{@link #getMaximumFilenameLength maximumFilenameLength} : int</li>
 * <li>{@link #getValueState valueState} : sap.ui.core.ValueState (default: None)</li>
 * <li>{@link #getIcon icon} : sap.ui.core.URI (default: )</li>
 * <li>{@link #getIconHovered iconHovered} : sap.ui.core.URI (default: )</li>
 * <li>{@link #getIconSelected iconSelected} : sap.ui.core.URI (default: )</li>
 * <li>{@link #getIconFirst iconFirst} : boolean (default: true)</li>
 * <li>{@link #getIconOnly iconOnly} : boolean (default: false)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getParameters parameters} : sap.ui.unified.FileUploaderParameter[]</li>
 * <li>{@link #getHeaderParameters headerParameters} : sap.ui.unified.FileUploaderParameter[]</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:change change} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:uploadComplete uploadComplete} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:typeMissmatch typeMissmatch} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:fileSizeExceed fileSizeExceed} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:fileAllowed fileAllowed} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:uploadProgress uploadProgress} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:uploadAborted uploadAborted} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:filenameLengthExceed filenameLengthExceed} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:uploadStart uploadStart} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * The framework generates an input field and a button with text "Browse ...". The API supports features such as on change uploads (the upload starts immediately after a file has been selected), file uploads with explicit calls, adjustable control sizes, text display after uploads, or tooltips containing complete file paths.
 * @extends sap.ui.core.Control
 * @version 1.32.7
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.unified.FileUploader = function(sId,mSettings) {};
/**
 * Event is fired when the value of the file path has been changed.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.newValue New file path value.
 * @param {object[]} oControlEvent.getParameters.files Files.
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.change = function(oControlEvent) {  };

/**
 * Event is fired when the file is allowed for upload on client side.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.fileAllowed = function(oControlEvent) {  };

/**
 * Event is fired, if the filename of a chosen file is longer than the value specified with the maximumFilenameLength property.
 * @event
 * @since 1.24.0
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.fileName The filename, which is longer than specified by the value of the property maximumFilenameLength.
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.filenameLengthExceed = function(oControlEvent) {  };

/**
 * Event is fired when the size of a file is above the maximumFileSize property.
 * This event is not supported by Internet Explorer 9 (same restriction as for the property maximumFileSize).
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.fileName The name of a file to be uploaded.
 * @param {string} oControlEvent.getParameters.fileSize The size in MB of a file to be uploaded.
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.fileSizeExceed = function(oControlEvent) {  };

/**
 * Event is fired when the type of a file does not match the mimeType or fileType property.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.fileName The name of a file to be uploaded.
 * @param {string} oControlEvent.getParameters.fileType The file ending of a file to be uploaded.
 * @param {string} oControlEvent.getParameters.mimeType The MIME type of a file to be uploaded.
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.typeMissmatch = function(oControlEvent) {  };

/**
 * Event is fired after the current upload has been aborted.
 * This is event is only supported with property sendXHR set to true, i.e. the event is not supported in Internet Explorer 9.
 * @event
 * @since 1.24.0
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.fileName The name of a file to be uploaded.
 * @param {object[]} oControlEvent.getParameters.requestHeaders Http-Request-Headers. Required for receiving "header" is to set the property "sendXHR" to true.
 * This property is not supported by Internet Explorer 9.
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.uploadAborted = function(oControlEvent) {  };

/**
 * Event is fired as soon as the upload request is completed (either successful or unsuccessful). To see if the upload request was successful, check the 'state' parameter for a value 2xx.
 * The uploads actual progress can be retrieved via the 'uploadProgress' Event.
 * However this covers only the client side of the Upload process and does not give any success status from the server.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.fileName The name of a file to be uploaded.
 * @param {string} oControlEvent.getParameters.response Response message which comes from the server. On the server side this response has to be put within the &quot;body&quot; tags of the response document of the iFrame.
 * It can consist of a return code and an optional message. This does not work in cross-domain scenarios.
 * @param {string} oControlEvent.getParameters.readyStateXHR ReadyState of the XHR request. Required for receiving a readyState is to set the property "sendXHR" to "true". This property is not supported by Internet Explorer 9.
 * @param {string} oControlEvent.getParameters.status Status of the XHR request. Required for receiving a status is to set the property "sendXHR" to "true". This property is not supported by Internet Explorer 9.
 * @param {string} oControlEvent.getParameters.responseRaw Http-Response which comes from the server. Required for receiving "responseRaw" is to set the property "sendXHR" to true. This property is not supported by Internet Explorer 9.
 * @param {object} oControlEvent.getParameters.headers Http-Response-Headers which come from the server. provided as a JSON-map, i.e. each header-field is reflected by a property in the header-object, with the property value reflecting the header-field's content.
 * Required for receiving "header" is to set the property "sendXHR" to true.
 * This property is not supported by Internet Explorer 9.
 * @param {object[]} oControlEvent.getParameters.requestHeaders Http-Request-Headers. Required for receiving "header" is to set the property "sendXHR" to true. This property is not supported by Internet Explorer 9.
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.uploadComplete = function(oControlEvent) {  };

/**
 * Event is fired after the upload has started and before the upload is completed and contains progress information related to the running upload.
 * Depending on file size, band width and used browser the event is fired once or multiple times.
 * This is event is only supported with property sendXHR set to true, i.e. the event is not supported in Internet Explorer 9.
 * @event
 * @since 1.24.0
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {boolean} oControlEvent.getParameters.lengthComputable Indicates whether or not the relative upload progress can be calculated out of loaded and total.
 * @param {float} oControlEvent.getParameters.loaded The number of bytes of the file which have been uploaded by to the time the event was fired.
 * @param {float} oControlEvent.getParameters.total The total size of the file to be uploaded in byte.
 * @param {string} oControlEvent.getParameters.fileName The name of a file to be uploaded.
 * @param {object[]} oControlEvent.getParameters.requestHeaders Http-Request-Headers. Required for receiving "header" is to set the property "sendXHR" to true.
 * This property is not supported by Internet Explorer 9.
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.uploadProgress = function(oControlEvent) {  };

/**
 * Event is fired before an upload is started.
 * @event
 * @since 1.30.0
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.fileName The name of a file to be uploaded.
 * @param {object[]} oControlEvent.getParameters.requestHeaders Http-Request-Headers. Required for receiving "header" is to set the property "sendXHR" to true.
 * This property is not supported by Internet Explorer 9.
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.uploadStart = function(oControlEvent) {  };

/**
 * Aborts the currently running upload.
 * @type void
 * @public
 * @since 1.24.0
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.unified.FileUploader.prototype.abort = function() { return null; };

/**
 * Adds some headerParameter into the aggregation named <code>headerParameters</code>.
 * @param {sap.ui.unified.FileUploaderParameter}
 *            oHeaderParameter the headerParameter to add; to add; if empty, nothing is inserted
 * @returns {sap.ui.unified.FileUploader} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.addHeaderParameter = function(oHeaderParameter) { return new sap.ui.unified.FileUploader(); };

/**
 * Adds some parameter into the aggregation named <code>parameters</code>.
 * @param {sap.ui.unified.FileUploaderParameter}
 *            oParameter the parameter to add; to add; if empty, nothing is inserted
 * @returns {sap.ui.unified.FileUploader} Reference to <code>this</code> in order to allow method chaining
 * @since 1.12.2
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.addParameter = function(oParameter) { return new sap.ui.unified.FileUploader(); };

/**
 * Attaches event handler <code>fnFunction</code> to the 'change' event of this <code>sap.ui.unified.FileUploader</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise it will be bound to this <code>sap.ui.unified.FileUploader</code> itself.
 * 
 * Event is fired when the value of the file path has been changed.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to be called when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.unified.FileUploader</code> itself.
 * @returns {sap.ui.unified.FileUploader} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.attachChange = function(oData,fnFunction,oListener) { return new sap.ui.unified.FileUploader(); };

/**
 * Attaches event handler <code>fnFunction</code> to the 'fileAllowed' event of this <code>sap.ui.unified.FileUploader</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise it will be bound to this <code>sap.ui.unified.FileUploader</code> itself.
 * 
 * Event is fired when the file is allowed for upload on client side.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to be called when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.unified.FileUploader</code> itself.
 * @returns {sap.ui.unified.FileUploader} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.attachFileAllowed = function(oData,fnFunction,oListener) { return new sap.ui.unified.FileUploader(); };

/**
 * Attaches event handler <code>fnFunction</code> to the 'filenameLengthExceed' event of this <code>sap.ui.unified.FileUploader</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise it will be bound to this <code>sap.ui.unified.FileUploader</code> itself.
 * 
 * Event is fired, if the filename of a chosen file is longer than the value specified with the maximumFilenameLength property.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to be called when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.unified.FileUploader</code> itself.
 * @returns {sap.ui.unified.FileUploader} Reference to <code>this</code> in order to allow method chaining
 * @public
 * @since 1.24.0
 * 
 */
sap.ui.unified.FileUploader.prototype.attachFilenameLengthExceed = function(oData,fnFunction,oListener) { return new sap.ui.unified.FileUploader(); };

/**
 * Attaches event handler <code>fnFunction</code> to the 'fileSizeExceed' event of this <code>sap.ui.unified.FileUploader</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise it will be bound to this <code>sap.ui.unified.FileUploader</code> itself.
 * 
 * Event is fired when the size of a file is above the maximumFileSize property.
 * This event is not supported by Internet Explorer 9 (same restriction as for the property maximumFileSize).
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to be called when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.unified.FileUploader</code> itself.
 * @returns {sap.ui.unified.FileUploader} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.attachFileSizeExceed = function(oData,fnFunction,oListener) { return new sap.ui.unified.FileUploader(); };

/**
 * Attaches event handler <code>fnFunction</code> to the 'typeMissmatch' event of this <code>sap.ui.unified.FileUploader</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise it will be bound to this <code>sap.ui.unified.FileUploader</code> itself.
 * 
 * Event is fired when the type of a file does not match the mimeType or fileType property.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to be called when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.unified.FileUploader</code> itself.
 * @returns {sap.ui.unified.FileUploader} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.attachTypeMissmatch = function(oData,fnFunction,oListener) { return new sap.ui.unified.FileUploader(); };

/**
 * Attaches event handler <code>fnFunction</code> to the 'uploadAborted' event of this <code>sap.ui.unified.FileUploader</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise it will be bound to this <code>sap.ui.unified.FileUploader</code> itself.
 * 
 * Event is fired after the current upload has been aborted.
 * This is event is only supported with property sendXHR set to true, i.e. the event is not supported in Internet Explorer 9.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to be called when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.unified.FileUploader</code> itself.
 * @returns {sap.ui.unified.FileUploader} Reference to <code>this</code> in order to allow method chaining
 * @public
 * @since 1.24.0
 * 
 */
sap.ui.unified.FileUploader.prototype.attachUploadAborted = function(oData,fnFunction,oListener) { return new sap.ui.unified.FileUploader(); };

/**
 * Attaches event handler <code>fnFunction</code> to the 'uploadComplete' event of this <code>sap.ui.unified.FileUploader</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise it will be bound to this <code>sap.ui.unified.FileUploader</code> itself.
 * 
 * Event is fired as soon as the upload request is completed (either successful or unsuccessful). To see if the upload request was successful, check the 'state' parameter for a value 2xx.
 * The uploads actual progress can be retrieved via the 'uploadProgress' Event.
 * However this covers only the client side of the Upload process and does not give any success status from the server.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to be called when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.unified.FileUploader</code> itself.
 * @returns {sap.ui.unified.FileUploader} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.attachUploadComplete = function(oData,fnFunction,oListener) { return new sap.ui.unified.FileUploader(); };

/**
 * Attaches event handler <code>fnFunction</code> to the 'uploadProgress' event of this <code>sap.ui.unified.FileUploader</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise it will be bound to this <code>sap.ui.unified.FileUploader</code> itself.
 * 
 * Event is fired after the upload has started and before the upload is completed and contains progress information related to the running upload.
 * Depending on file size, band width and used browser the event is fired once or multiple times.
 * This is event is only supported with property sendXHR set to true, i.e. the event is not supported in Internet Explorer 9.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to be called when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.unified.FileUploader</code> itself.
 * @returns {sap.ui.unified.FileUploader} Reference to <code>this</code> in order to allow method chaining
 * @public
 * @since 1.24.0
 * 
 */
sap.ui.unified.FileUploader.prototype.attachUploadProgress = function(oData,fnFunction,oListener) { return new sap.ui.unified.FileUploader(); };

/**
 * Attaches event handler <code>fnFunction</code> to the 'uploadStart' event of this <code>sap.ui.unified.FileUploader</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise it will be bound to this <code>sap.ui.unified.FileUploader</code> itself.
 * 
 * Event is fired before an upload is started.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to be called when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.unified.FileUploader</code> itself.
 * @returns {sap.ui.unified.FileUploader} Reference to <code>this</code> in order to allow method chaining
 * @public
 * @since 1.30.0
 * 
 */
sap.ui.unified.FileUploader.prototype.attachUploadStart = function(oData,fnFunction,oListener) { return new sap.ui.unified.FileUploader(); };

/**
 * Clears the content of the FileUploader. The attached additional data however is retained.
 * @type void
 * @public
 * @since 1.25.0
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.unified.FileUploader.prototype.clear = function() { return null; };

/**
 * Destroys all the headerParameters in the aggregation
 * named <code>headerParameters</code>.
 * @returns {sap.ui.unified.FileUploader} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.destroyHeaderParameters = function() { return new sap.ui.unified.FileUploader(); };

/**
 * Destroys all the parameters in the aggregation
 * named <code>parameters</code>.
 * @returns {sap.ui.unified.FileUploader} Reference to <code>this</code> in order to allow method chaining
 * @since 1.12.2
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.destroyParameters = function() { return new sap.ui.unified.FileUploader(); };

/**
 * Detaches event handler <code>fnFunction</code> from the 'change' event of this <code>sap.ui.unified.FileUploader</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @returns {sap.ui.unified.FileUploader} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.detachChange = function(fnFunction,oListener) { return new sap.ui.unified.FileUploader(); };

/**
 * Detaches event handler <code>fnFunction</code> from the 'fileAllowed' event of this <code>sap.ui.unified.FileUploader</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @returns {sap.ui.unified.FileUploader} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.detachFileAllowed = function(fnFunction,oListener) { return new sap.ui.unified.FileUploader(); };

/**
 * Detaches event handler <code>fnFunction</code> from the 'filenameLengthExceed' event of this <code>sap.ui.unified.FileUploader</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @returns {sap.ui.unified.FileUploader} Reference to <code>this</code> in order to allow method chaining
 * @since 1.24.0
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.detachFilenameLengthExceed = function(fnFunction,oListener) { return new sap.ui.unified.FileUploader(); };

/**
 * Detaches event handler <code>fnFunction</code> from the 'fileSizeExceed' event of this <code>sap.ui.unified.FileUploader</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @returns {sap.ui.unified.FileUploader} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.detachFileSizeExceed = function(fnFunction,oListener) { return new sap.ui.unified.FileUploader(); };

/**
 * Detaches event handler <code>fnFunction</code> from the 'typeMissmatch' event of this <code>sap.ui.unified.FileUploader</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @returns {sap.ui.unified.FileUploader} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.detachTypeMissmatch = function(fnFunction,oListener) { return new sap.ui.unified.FileUploader(); };

/**
 * Detaches event handler <code>fnFunction</code> from the 'uploadAborted' event of this <code>sap.ui.unified.FileUploader</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @returns {sap.ui.unified.FileUploader} Reference to <code>this</code> in order to allow method chaining
 * @since 1.24.0
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.detachUploadAborted = function(fnFunction,oListener) { return new sap.ui.unified.FileUploader(); };

/**
 * Detaches event handler <code>fnFunction</code> from the 'uploadComplete' event of this <code>sap.ui.unified.FileUploader</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @returns {sap.ui.unified.FileUploader} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.detachUploadComplete = function(fnFunction,oListener) { return new sap.ui.unified.FileUploader(); };

/**
 * Detaches event handler <code>fnFunction</code> from the 'uploadProgress' event of this <code>sap.ui.unified.FileUploader</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @returns {sap.ui.unified.FileUploader} Reference to <code>this</code> in order to allow method chaining
 * @since 1.24.0
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.detachUploadProgress = function(fnFunction,oListener) { return new sap.ui.unified.FileUploader(); };

/**
 * Detaches event handler <code>fnFunction</code> from the 'uploadStart' event of this <code>sap.ui.unified.FileUploader</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @returns {sap.ui.unified.FileUploader} Reference to <code>this</code> in order to allow method chaining
 * @since 1.30.0
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.detachUploadStart = function(fnFunction,oListener) { return new sap.ui.unified.FileUploader(); };

/**
 * Creates a new subclass of class sap.ui.unified.FileUploader with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object. If not given, it defaults to <code>sap.ui.core.ElementMetadata</code>.
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.unified.FileUploader.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event change to attached listeners.
 * 
 * Expects the following event parameters:
 * <ul>
 * <li>'newValue' of type <code>string</code>New file path value.</li>
 * <li>'files' of type <code>object[]</code>Files.</li>
 * </ul>
 * @param {Map} [mArguments] The arguments to pass along with the event.
 * @returns {sap.ui.unified.FileUploader} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.unified.FileUploader.prototype.fireChange = function(mArguments) { return new sap.ui.unified.FileUploader(); };

/**
 * Fires event fileAllowed to attached listeners.
 * @param {Map} [mArguments] The arguments to pass along with the event.
 * @returns {sap.ui.unified.FileUploader} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.unified.FileUploader.prototype.fireFileAllowed = function(mArguments) { return new sap.ui.unified.FileUploader(); };

/**
 * Fires event filenameLengthExceed to attached listeners.
 * 
 * Expects the following event parameters:
 * <ul>
 * <li>'fileName' of type <code>string</code>The filename, which is longer than specified by the value of the property maximumFilenameLength.</li>
 * </ul>
 * @param {Map} [mArguments] The arguments to pass along with the event.
 * @returns {sap.ui.unified.FileUploader} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * @since 1.24.0
 * 
 */
sap.ui.unified.FileUploader.prototype.fireFilenameLengthExceed = function(mArguments) { return new sap.ui.unified.FileUploader(); };

/**
 * Fires event fileSizeExceed to attached listeners.
 * 
 * Expects the following event parameters:
 * <ul>
 * <li>'fileName' of type <code>string</code>The name of a file to be uploaded.</li>
 * <li>'fileSize' of type <code>string</code>The size in MB of a file to be uploaded.</li>
 * </ul>
 * @param {Map} [mArguments] The arguments to pass along with the event.
 * @returns {sap.ui.unified.FileUploader} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.unified.FileUploader.prototype.fireFileSizeExceed = function(mArguments) { return new sap.ui.unified.FileUploader(); };

/**
 * Fires event typeMissmatch to attached listeners.
 * 
 * Expects the following event parameters:
 * <ul>
 * <li>'fileName' of type <code>string</code>The name of a file to be uploaded.</li>
 * <li>'fileType' of type <code>string</code>The file ending of a file to be uploaded.</li>
 * <li>'mimeType' of type <code>string</code>The MIME type of a file to be uploaded.</li>
 * </ul>
 * @param {Map} [mArguments] The arguments to pass along with the event.
 * @returns {sap.ui.unified.FileUploader} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.unified.FileUploader.prototype.fireTypeMissmatch = function(mArguments) { return new sap.ui.unified.FileUploader(); };

/**
 * Fires event uploadAborted to attached listeners.
 * 
 * Expects the following event parameters:
 * <ul>
 * <li>'fileName' of type <code>string</code>The name of a file to be uploaded.</li>
 * <li>'requestHeaders' of type <code>object[]</code>Http-Request-Headers. Required for receiving "header" is to set the property "sendXHR" to true.
 * This property is not supported by Internet Explorer 9.</li>
 * </ul>
 * @param {Map} [mArguments] The arguments to pass along with the event.
 * @returns {sap.ui.unified.FileUploader} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * @since 1.24.0
 * 
 */
sap.ui.unified.FileUploader.prototype.fireUploadAborted = function(mArguments) { return new sap.ui.unified.FileUploader(); };

/**
 * Fires event uploadComplete to attached listeners.
 * 
 * Expects the following event parameters:
 * <ul>
 * <li>'fileName' of type <code>string</code>The name of a file to be uploaded.</li>
 * <li>'response' of type <code>string</code>Response message which comes from the server. On the server side this response has to be put within the &quot;body&quot; tags of the response document of the iFrame.
 * It can consist of a return code and an optional message. This does not work in cross-domain scenarios.</li>
 * <li>'readyStateXHR' of type <code>string</code>ReadyState of the XHR request. Required for receiving a readyState is to set the property "sendXHR" to "true". This property is not supported by Internet Explorer 9.</li>
 * <li>'status' of type <code>string</code>Status of the XHR request. Required for receiving a status is to set the property "sendXHR" to "true". This property is not supported by Internet Explorer 9.</li>
 * <li>'responseRaw' of type <code>string</code>Http-Response which comes from the server. Required for receiving "responseRaw" is to set the property "sendXHR" to true. This property is not supported by Internet Explorer 9.</li>
 * <li>'headers' of type <code>object</code>Http-Response-Headers which come from the server. provided as a JSON-map, i.e. each header-field is reflected by a property in the header-object, with the property value reflecting the header-field's content.
 * Required for receiving "header" is to set the property "sendXHR" to true.
 * This property is not supported by Internet Explorer 9.</li>
 * <li>'requestHeaders' of type <code>object[]</code>Http-Request-Headers. Required for receiving "header" is to set the property "sendXHR" to true. This property is not supported by Internet Explorer 9.</li>
 * </ul>
 * @param {Map} [mArguments] The arguments to pass along with the event.
 * @returns {sap.ui.unified.FileUploader} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.unified.FileUploader.prototype.fireUploadComplete = function(mArguments) { return new sap.ui.unified.FileUploader(); };

/**
 * Fires event uploadProgress to attached listeners.
 * 
 * Expects the following event parameters:
 * <ul>
 * <li>'lengthComputable' of type <code>boolean</code>Indicates whether or not the relative upload progress can be calculated out of loaded and total.</li>
 * <li>'loaded' of type <code>float</code>The number of bytes of the file which have been uploaded by to the time the event was fired.</li>
 * <li>'total' of type <code>float</code>The total size of the file to be uploaded in byte.</li>
 * <li>'fileName' of type <code>string</code>The name of a file to be uploaded.</li>
 * <li>'requestHeaders' of type <code>object[]</code>Http-Request-Headers. Required for receiving "header" is to set the property "sendXHR" to true.
 * This property is not supported by Internet Explorer 9.</li>
 * </ul>
 * @param {Map} [mArguments] The arguments to pass along with the event.
 * @returns {sap.ui.unified.FileUploader} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * @since 1.24.0
 * 
 */
sap.ui.unified.FileUploader.prototype.fireUploadProgress = function(mArguments) { return new sap.ui.unified.FileUploader(); };

/**
 * Fires event uploadStart to attached listeners.
 * 
 * Expects the following event parameters:
 * <ul>
 * <li>'fileName' of type <code>string</code>The name of a file to be uploaded.</li>
 * <li>'requestHeaders' of type <code>object[]</code>Http-Request-Headers. Required for receiving "header" is to set the property "sendXHR" to true.
 * This property is not supported by Internet Explorer 9.</li>
 * </ul>
 * @param {Map} [mArguments] The arguments to pass along with the event.
 * @returns {sap.ui.unified.FileUploader} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * @since 1.30.0
 * 
 */
sap.ui.unified.FileUploader.prototype.fireUploadStart = function(mArguments) { return new sap.ui.unified.FileUploader(); };

/**
 * Gets current value of property <code>additionalData</code>.
 * 
 * Additional data that is sent to the back end service. Data will be transmitted as value of a hidden input where the name is derived from the name property with suffix -data.
 * @returns {string} Value of property <code>additionalData</code>
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.getAdditionalData = function() { return ""; };

/**
 * Gets current value of property <code>buttonOnly</code>.
 * 
 * If set to "true", the FileUploader will be rendered as Button only, without showing the InputField.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>buttonOnly</code>
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.getButtonOnly = function() { return false; };

/**
 * Gets current value of property <code>buttonText</code>.
 * 
 * The Button text can be overwritten using this property.
 * @returns {string} Value of property <code>buttonText</code>
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.getButtonText = function() { return ""; };

/**
 * Gets current value of property <code>enabled</code>.
 * 
 * Disabled controls have different colors, depending on customer settings.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>enabled</code>
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.getEnabled = function() { return false; };

/**
 * Gets current value of property <code>fileType</code>.
 * 
 * The chosen files will be checked against an array of file types. If at least one file does not fit the file type restriction the upload is prevented.
 * Example: ["jpg", "png", "bmp"].
 * @returns {string[]} Value of property <code>fileType</code>
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.getFileType = function() { return new Array(); };

/**
 * Gets content of aggregation <code>headerParameters</code>.
 * 
 * The header parameters for the FileUploader which are only submitted with XHR requests. Header parameters are not supported by Internet Explorer 9.
 * @returns {sap.ui.unified.FileUploaderParameter[]}
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.getHeaderParameters = function() { return new Array(); };

/**
 * Gets current value of property <code>icon</code>.
 * 
 * Icon to be displayed as graphical element within the button.
 * This can be an URI to an image or an icon font URI.
 * 
 * Default value is <code></code>.
 * @returns {sap.ui.core.URI} Value of property <code>icon</code>
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.getIcon = function() { return new sap.ui.core.URI(); };

/**
 * Gets current value of property <code>iconFirst</code>.
 * 
 * If set to true (default), the display sequence is 1. icon 2. control text.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>iconFirst</code>
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.getIconFirst = function() { return false; };

/**
 * Gets current value of property <code>iconHovered</code>.
 * 
 * Icon to be displayed as graphical element within the button when it is hovered (only if also a base icon was specified). If not specified the base icon is used.
 * If a icon font icon is used, this property is ignored.
 * 
 * Default value is <code></code>.
 * @returns {sap.ui.core.URI} Value of property <code>iconHovered</code>
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.getIconHovered = function() { return new sap.ui.core.URI(); };

/**
 * Gets current value of property <code>iconOnly</code>.
 * 
 * If set to true, the button is displayed without any text.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>iconOnly</code>
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.getIconOnly = function() { return false; };

/**
 * Gets current value of property <code>iconSelected</code>.
 * 
 * Icon to be displayed as graphical element within the button when it is selected (only if also a base icon was specified). If not specified the base or hovered icon is used.
 * If a icon font icon is used, this property is ignored.
 * 
 * Default value is <code></code>.
 * @returns {sap.ui.core.URI} Value of property <code>iconSelected</code>
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.getIconSelected = function() { return new sap.ui.core.URI(); };

/**
 * Gets current value of property <code>maximumFilenameLength</code>.
 * 
 * The maximum length of a filename which the FileUploader will accept. If the maximum filename length is exceeded, the corresponding Event 'filenameLengthExceed' is fired.
 * @returns {int} Value of property <code>maximumFilenameLength</code>
 * @since 1.24.0
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.getMaximumFilenameLength = function() { return 0; };

/**
 * Gets current value of property <code>maximumFileSize</code>.
 * 
 * A file size limit in megabytes which prevents the upload if at least one file exceeds it. This property is not supported by Internet Explorer 9.
 * @returns {float} Value of property <code>maximumFileSize</code>
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.getMaximumFileSize = function() { return 0.0; };

/**
 * Returns a metadata object for class sap.ui.unified.FileUploader.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.unified.FileUploader.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property <code>mimeType</code>.
 * 
 * The chosen files will be checked against an array of mime types. If at least one file does not fit the mime type restriction the upload is prevented. This property is not supported by Internet Explorer 9.
 * Example: mimeType ["image/png", "image/jpeg"].
 * @returns {string[]} Value of property <code>mimeType</code>
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.getMimeType = function() { return new Array(); };

/**
 * Gets current value of property <code>multiple</code>.
 * 
 * Allows multiple files to be chosen and uploaded from the same folder. This property is not supported by Internet Explorer 9.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>multiple</code>
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.getMultiple = function() { return false; };

/**
 * Gets current value of property <code>name</code>.
 * 
 * Unique control name for identification on the server side after sending data to the server.
 * @returns {string} Value of property <code>name</code>
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.getName = function() { return ""; };

/**
 * Gets content of aggregation <code>parameters</code>.
 * 
 * The parameters for the FileUploader which are rendered as a hidden inputfield.
 * @returns {sap.ui.unified.FileUploaderParameter[]}
 * @since 1.12.2
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.getParameters = function() { return new Array(); };

/**
 * Gets current value of property <code>placeholder</code>.
 * 
 * Placeholder for the text field.
 * @returns {string} Value of property <code>placeholder</code>
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.getPlaceholder = function() { return ""; };

/**
 * Gets current value of property <code>sameFilenameAllowed</code>.
 * 
 * If the FileUploader is configured to upload the file directly after the file is selected it is not allowed to upload a file with the same name again. If a user should be allowed to upload a file with the same name again this parameter has to be "true". A typical use case would be if the files have different paths.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>sameFilenameAllowed</code>
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.getSameFilenameAllowed = function() { return false; };

/**
 * Gets current value of property <code>sendXHR</code>.
 * 
 * If set to "true", the request will be sent as XHR request instead of a form submit. This property is not supported by Internet Explorer 9.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>sendXHR</code>
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.getSendXHR = function() { return false; };

/**
 * Gets current value of property <code>style</code>.
 * 
 * Style of the button. "Transparent, "Accept", "Reject", or "Emphasized" is allowed.
 * @returns {string} Value of property <code>style</code>
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.getStyle = function() { return ""; };

/**
 * Gets current value of property <code>uploadOnChange</code>.
 * 
 * If set to "true", the upload immediately starts after file selection. With the default setting, the upload needs to be explicitly triggered.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>uploadOnChange</code>
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.getUploadOnChange = function() { return false; };

/**
 * Gets current value of property <code>uploadUrl</code>.
 * 
 * Used when URL address is on a remote server.
 * 
 * Default value is <code></code>.
 * @returns {sap.ui.core.URI} Value of property <code>uploadUrl</code>
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.getUploadUrl = function() { return new sap.ui.core.URI(); };

/**
 * Gets current value of property <code>useMultipart</code>.
 * 
 * If set to "false", the request will be sent as file only request instead of a multipart/form-data request. Only one file could be uploaded using this type of request. Required for sending such a request is to set the property "sendXHR" to "true". This property is not supported by Internet Explorer 9.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>useMultipart</code>
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.getUseMultipart = function() { return false; };

/**
 * Gets current value of property <code>value</code>.
 * 
 * Value of the path for file upload.
 * 
 * Default value is <code></code>.
 * @returns {string} Value of property <code>value</code>
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.getValue = function() { return ""; };

/**
 * Gets current value of property <code>valueState</code>.
 * 
 * Visualizes warnings or errors related to the text field. Possible values: Warning, Error, Success, None.
 * 
 * Default value is <code>None</code>.
 * @returns {sap.ui.core.ValueState} Value of property <code>valueState</code>
 * @since 1.24.0
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.getValueState = function() { return new sap.ui.core.ValueState(); };

/**
 * Gets current value of property <code>width</code>.
 * 
 * Specifies the displayed control width.
 * 
 * Default value is <code></code>.
 * @returns {sap.ui.core.CSSSize} Value of property <code>width</code>
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * Checks for the provided <code>sap.ui.unified.FileUploaderParameter</code> in the aggregation named <code>headerParameters</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.unified.FileUploaderParameter}
 *           oHeaderParameter The headerParameter whose index is looked for.
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.indexOfHeaderParameter = function(oHeaderParameter) { return 0; };

/**
 * Checks for the provided <code>sap.ui.unified.FileUploaderParameter</code> in the aggregation named <code>parameters</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.unified.FileUploaderParameter}
 *           oParameter The parameter whose index is looked for.
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * @since 1.12.2
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.indexOfParameter = function(oParameter) { return 0; };

/**
 * Inserts a headerParameter into the aggregation named <code>headerParameters</code>.
 * @param {sap.ui.unified.FileUploaderParameter}
 *            oHeaderParameter the headerParameter to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the headerParameter should be inserted at; for
 *              a negative value of <code>iIndex</code>, the headerParameter is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the headerParameter is inserted at
 *              the last position
 * @returns {sap.ui.unified.FileUploader} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.insertHeaderParameter = function(oHeaderParameter,iIndex) { return new sap.ui.unified.FileUploader(); };

/**
 * Inserts a parameter into the aggregation named <code>parameters</code>.
 * @param {sap.ui.unified.FileUploaderParameter}
 *            oParameter the parameter to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the parameter should be inserted at; for
 *              a negative value of <code>iIndex</code>, the parameter is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the parameter is inserted at
 *              the last position
 * @returns {sap.ui.unified.FileUploader} Reference to <code>this</code> in order to allow method chaining
 * @since 1.12.2
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.insertParameter = function(oParameter,iIndex) { return new sap.ui.unified.FileUploader(); };

/**
 * Removes all the controls in the aggregation named <code>headerParameters</code>.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.unified.FileUploaderParameter[]} An array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.removeAllHeaderParameters = function() { return new Array(); };

/**
 * Removes all the controls in the aggregation named <code>parameters</code>.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.unified.FileUploaderParameter[]} An array of the removed elements (might be empty)
 * @since 1.12.2
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.removeAllParameters = function() { return new Array(); };

/**
 * Removes a headerParameter from the aggregation named <code>headerParameters</code>.
 * @param {int | string | sap.ui.unified.FileUploaderParameter} vHeaderParameter The headerParameterto remove or its index or id
 * @returns {sap.ui.unified.FileUploaderParameter} The removed headerParameter or <code>null</code>
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.removeHeaderParameter = function(vHeaderParameter) { return new sap.ui.unified.FileUploaderParameter(); };

/**
 * Removes a parameter from the aggregation named <code>parameters</code>.
 * @param {int | string | sap.ui.unified.FileUploaderParameter} vParameter The parameterto remove or its index or id
 * @returns {sap.ui.unified.FileUploaderParameter} The removed parameter or <code>null</code>
 * @since 1.12.2
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.removeParameter = function(vParameter) { return new sap.ui.unified.FileUploaderParameter(); };

/**
 * Sets a new value for property <code>additionalData</code>.
 * 
 * Additional data that is sent to the back end service. Data will be transmitted as value of a hidden input where the name is derived from the name property with suffix -data.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sAdditionalData New value for property <code>additionalData</code>
 * @returns {sap.ui.unified.FileUploader} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.setAdditionalData = function(sAdditionalData) { return new sap.ui.unified.FileUploader(); };

/**
 * Sets a new value for property <code>buttonOnly</code>.
 * 
 * If set to "true", the FileUploader will be rendered as Button only, without showing the InputField.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bButtonOnly New value for property <code>buttonOnly</code>
 * @returns {sap.ui.unified.FileUploader} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.setButtonOnly = function(bButtonOnly) { return new sap.ui.unified.FileUploader(); };

/**
 * Sets a new value for property <code>buttonText</code>.
 * 
 * The Button text can be overwritten using this property.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sButtonText New value for property <code>buttonText</code>
 * @returns {sap.ui.unified.FileUploader} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.setButtonText = function(sButtonText) { return new sap.ui.unified.FileUploader(); };

/**
 * Sets a new value for property <code>enabled</code>.
 * 
 * Disabled controls have different colors, depending on customer settings.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bEnabled New value for property <code>enabled</code>
 * @returns {sap.ui.unified.FileUploader} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.setEnabled = function(bEnabled) { return new sap.ui.unified.FileUploader(); };

/**
 * Sets a new value for property <code>fileType</code>.
 * 
 * The chosen files will be checked against an array of file types. If at least one file does not fit the file type restriction the upload is prevented.
 * Example: ["jpg", "png", "bmp"].
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string[]} sFileType New value for property <code>fileType</code>
 * @returns {sap.ui.unified.FileUploader} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.setFileType = function(sFileType) { return new sap.ui.unified.FileUploader(); };

/**
 * Sets a new value for property <code>icon</code>.
 * 
 * Icon to be displayed as graphical element within the button.
 * This can be an URI to an image or an icon font URI.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code></code>.
 * @param {sap.ui.core.URI} sIcon New value for property <code>icon</code>
 * @returns {sap.ui.unified.FileUploader} Reference to <code>this</code> in order to allow method chaining
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.setIcon = function(sIcon) { return new sap.ui.unified.FileUploader(); };

/**
 * Sets a new value for property <code>iconFirst</code>.
 * 
 * If set to true (default), the display sequence is 1. icon 2. control text.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bIconFirst New value for property <code>iconFirst</code>
 * @returns {sap.ui.unified.FileUploader} Reference to <code>this</code> in order to allow method chaining
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.setIconFirst = function(bIconFirst) { return new sap.ui.unified.FileUploader(); };

/**
 * Sets a new value for property <code>iconHovered</code>.
 * 
 * Icon to be displayed as graphical element within the button when it is hovered (only if also a base icon was specified). If not specified the base icon is used.
 * If a icon font icon is used, this property is ignored.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code></code>.
 * @param {sap.ui.core.URI} sIconHovered New value for property <code>iconHovered</code>
 * @returns {sap.ui.unified.FileUploader} Reference to <code>this</code> in order to allow method chaining
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.setIconHovered = function(sIconHovered) { return new sap.ui.unified.FileUploader(); };

/**
 * Sets a new value for property <code>iconOnly</code>.
 * 
 * If set to true, the button is displayed without any text.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bIconOnly New value for property <code>iconOnly</code>
 * @returns {sap.ui.unified.FileUploader} Reference to <code>this</code> in order to allow method chaining
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.setIconOnly = function(bIconOnly) { return new sap.ui.unified.FileUploader(); };

/**
 * Sets a new value for property <code>iconSelected</code>.
 * 
 * Icon to be displayed as graphical element within the button when it is selected (only if also a base icon was specified). If not specified the base or hovered icon is used.
 * If a icon font icon is used, this property is ignored.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code></code>.
 * @param {sap.ui.core.URI} sIconSelected New value for property <code>iconSelected</code>
 * @returns {sap.ui.unified.FileUploader} Reference to <code>this</code> in order to allow method chaining
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.setIconSelected = function(sIconSelected) { return new sap.ui.unified.FileUploader(); };

/**
 * Sets a new value for property <code>maximumFilenameLength</code>.
 * 
 * The maximum length of a filename which the FileUploader will accept. If the maximum filename length is exceeded, the corresponding Event 'filenameLengthExceed' is fired.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {int} iMaximumFilenameLength New value for property <code>maximumFilenameLength</code>
 * @returns {sap.ui.unified.FileUploader} Reference to <code>this</code> in order to allow method chaining
 * @since 1.24.0
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.setMaximumFilenameLength = function(iMaximumFilenameLength) { return new sap.ui.unified.FileUploader(); };

/**
 * Sets a new value for property <code>maximumFileSize</code>.
 * 
 * A file size limit in megabytes which prevents the upload if at least one file exceeds it. This property is not supported by Internet Explorer 9.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {float} fMaximumFileSize New value for property <code>maximumFileSize</code>
 * @returns {sap.ui.unified.FileUploader} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.setMaximumFileSize = function(fMaximumFileSize) { return new sap.ui.unified.FileUploader(); };

/**
 * Sets a new value for property <code>mimeType</code>.
 * 
 * The chosen files will be checked against an array of mime types. If at least one file does not fit the mime type restriction the upload is prevented. This property is not supported by Internet Explorer 9.
 * Example: mimeType ["image/png", "image/jpeg"].
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string[]} sMimeType New value for property <code>mimeType</code>
 * @returns {sap.ui.unified.FileUploader} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.setMimeType = function(sMimeType) { return new sap.ui.unified.FileUploader(); };

/**
 * Sets a new value for property <code>multiple</code>.
 * 
 * Allows multiple files to be chosen and uploaded from the same folder. This property is not supported by Internet Explorer 9.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bMultiple New value for property <code>multiple</code>
 * @returns {sap.ui.unified.FileUploader} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.setMultiple = function(bMultiple) { return new sap.ui.unified.FileUploader(); };

/**
 * Sets a new value for property <code>name</code>.
 * 
 * Unique control name for identification on the server side after sending data to the server.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sName New value for property <code>name</code>
 * @returns {sap.ui.unified.FileUploader} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.setName = function(sName) { return new sap.ui.unified.FileUploader(); };

/**
 * Sets a new value for property <code>placeholder</code>.
 * 
 * Placeholder for the text field.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sPlaceholder New value for property <code>placeholder</code>
 * @returns {sap.ui.unified.FileUploader} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.setPlaceholder = function(sPlaceholder) { return new sap.ui.unified.FileUploader(); };

/**
 * Sets a new value for property <code>sameFilenameAllowed</code>.
 * 
 * If the FileUploader is configured to upload the file directly after the file is selected it is not allowed to upload a file with the same name again. If a user should be allowed to upload a file with the same name again this parameter has to be "true". A typical use case would be if the files have different paths.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bSameFilenameAllowed New value for property <code>sameFilenameAllowed</code>
 * @returns {sap.ui.unified.FileUploader} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.setSameFilenameAllowed = function(bSameFilenameAllowed) { return new sap.ui.unified.FileUploader(); };

/**
 * Sets a new value for property <code>sendXHR</code>.
 * 
 * If set to "true", the request will be sent as XHR request instead of a form submit. This property is not supported by Internet Explorer 9.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bSendXHR New value for property <code>sendXHR</code>
 * @returns {sap.ui.unified.FileUploader} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.setSendXHR = function(bSendXHR) { return new sap.ui.unified.FileUploader(); };

/**
 * Sets a new value for property <code>style</code>.
 * 
 * Style of the button. "Transparent, "Accept", "Reject", or "Emphasized" is allowed.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sStyle New value for property <code>style</code>
 * @returns {sap.ui.unified.FileUploader} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.setStyle = function(sStyle) { return new sap.ui.unified.FileUploader(); };

/**
 * Sets a new value for property <code>uploadOnChange</code>.
 * 
 * If set to "true", the upload immediately starts after file selection. With the default setting, the upload needs to be explicitly triggered.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bUploadOnChange New value for property <code>uploadOnChange</code>
 * @returns {sap.ui.unified.FileUploader} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.setUploadOnChange = function(bUploadOnChange) { return new sap.ui.unified.FileUploader(); };

/**
 * Sets a new value for property <code>uploadUrl</code>.
 * 
 * Used when URL address is on a remote server.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code></code>.
 * @param {sap.ui.core.URI} sUploadUrl New value for property <code>uploadUrl</code>
 * @returns {sap.ui.unified.FileUploader} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.setUploadUrl = function(sUploadUrl) { return new sap.ui.unified.FileUploader(); };

/**
 * Sets a new value for property <code>useMultipart</code>.
 * 
 * If set to "false", the request will be sent as file only request instead of a multipart/form-data request. Only one file could be uploaded using this type of request. Required for sending such a request is to set the property "sendXHR" to "true". This property is not supported by Internet Explorer 9.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bUseMultipart New value for property <code>useMultipart</code>
 * @returns {sap.ui.unified.FileUploader} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.setUseMultipart = function(bUseMultipart) { return new sap.ui.unified.FileUploader(); };

/**
 * Sets a new value for property <code>value</code>.
 * 
 * Value of the path for file upload.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code></code>.
 * @param {string} sValue New value for property <code>value</code>
 * @returns {sap.ui.unified.FileUploader} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.setValue = function(sValue) { return new sap.ui.unified.FileUploader(); };

/**
 * Sets a new value for property <code>valueState</code>.
 * 
 * Visualizes warnings or errors related to the text field. Possible values: Warning, Error, Success, None.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>None</code>.
 * @param {sap.ui.core.ValueState} sValueState New value for property <code>valueState</code>
 * @returns {sap.ui.unified.FileUploader} Reference to <code>this</code> in order to allow method chaining
 * @since 1.24.0
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.setValueState = function(sValueState) { return new sap.ui.unified.FileUploader(); };

/**
 * Sets a new value for property <code>width</code>.
 * 
 * Specifies the displayed control width.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code></code>.
 * @param {sap.ui.core.CSSSize} sWidth New value for property <code>width</code>
 * @returns {sap.ui.unified.FileUploader} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.FileUploader.prototype.setWidth = function(sWidth) { return new sap.ui.unified.FileUploader(); };

/**
 * Starts the upload (as defined by uploadUrl)
 * @type void
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.unified.FileUploader.prototype.upload = function() { return null; };


// ---- sap.ui.unified.FileUploaderParameter --------------------------------------------------------------------------

/**
 * Constructor for a new FileUploaderParameter.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getName name} : string</li>
 * <li>{@link #getValue value} : string</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Represents a parameter for the FileUploader which is rendered as a hidden inputfield.
 * @extends sap.ui.core.Element
 * @version 1.32.7
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.unified.FileUploaderParameter = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.ui.unified.FileUploaderParameter with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object. If not given, it defaults to <code>sap.ui.core.ElementMetadata</code>.
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.unified.FileUploaderParameter.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.ui.unified.FileUploaderParameter.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.unified.FileUploaderParameter.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property <code>name</code>.
 * 
 * The name of the hidden inputfield.
 * @returns {string} Value of property <code>name</code>
 * @since 1.12.2
 * @public
 * 
 */
sap.ui.unified.FileUploaderParameter.prototype.getName = function() { return ""; };

/**
 * Gets current value of property <code>value</code>.
 * 
 * The value of the hidden inputfield.
 * @returns {string} Value of property <code>value</code>
 * @since 1.12.2
 * @public
 * 
 */
sap.ui.unified.FileUploaderParameter.prototype.getValue = function() { return ""; };

/**
 * Sets a new value for property <code>name</code>.
 * 
 * The name of the hidden inputfield.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sName New value for property <code>name</code>
 * @returns {sap.ui.unified.FileUploaderParameter} Reference to <code>this</code> in order to allow method chaining
 * @since 1.12.2
 * @public
 * 
 */
sap.ui.unified.FileUploaderParameter.prototype.setName = function(sName) { return new sap.ui.unified.FileUploaderParameter(); };

/**
 * Sets a new value for property <code>value</code>.
 * 
 * The value of the hidden inputfield.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sValue New value for property <code>value</code>
 * @returns {sap.ui.unified.FileUploaderParameter} Reference to <code>this</code> in order to allow method chaining
 * @since 1.12.2
 * @public
 * 
 */
sap.ui.unified.FileUploaderParameter.prototype.setValue = function(sValue) { return new sap.ui.unified.FileUploaderParameter(); };


// ---- sap.ui.unified.Menu --------------------------------------------------------------------------

/**
 * Constructor for a new Menu control.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getEnabled enabled} : boolean (default: true)</li>
 * <li>{@link #getAriaDescription ariaDescription} : string</li>
 * <li>{@link #getMaxVisibleItems maxVisibleItems} : int (default: 0)</li>
 * <li>{@link #getPageSize pageSize} : int (default: 5)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getItems items} : sap.ui.unified.MenuItemBase[] (default)</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:itemSelect itemSelect} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * @param {string} [sId] Id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] Initial settings for the new control
 * @class
 * A menu is an interactive element which provides a choice of different actions to the user. These actions (items) can also be organized in submenus.
 * Like other dialog-like controls, the menu is not rendered within the control hierarchy. Instead it can be opened at a specified position via a function call. 
 * @extends sap.ui.core.Control
 * @version 1.32.7
 * @since 1.21.0
 * @constructor
 * @public
 * @ui5-metamodel This control/element will also be described in the UI5 (legacy) design time meta model
 * 
 */
sap.ui.unified.Menu = function(sId,mSettings) {};
/**
 * Fired on the root menu of a menu hierarchy whenever a user selects an item within the menu or within one of its direct or indirect submenus.
 * <b>Note:</b> There is also a select event available for each single menu item. This event and the event of the menu items are redundant.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {sap.ui.unified.MenuItemBase} oControlEvent.getParameters.item The action (item) which was selected by the user.
 * @public
 * 
 */
sap.ui.unified.Menu.prototype.itemSelect = function(oControlEvent) {  };

/**
 * Adds some ariaLabelledBy into the association named <code>ariaLabelledBy</code>.
 * @param {string | sap.ui.core.Control} vAriaLabelledBy the ariaLabelledBy to add; if empty, nothing is inserted
 * @returns {sap.ui.unified.Menu} Reference to <code>this</code> in order to allow method chaining
 * @since 1.26.3
 * @public
 * 
 */
sap.ui.unified.Menu.prototype.addAriaLabelledBy = function(vAriaLabelledBy) { return new sap.ui.unified.Menu(); };

/**
 * Adds some item into the aggregation named <code>items</code>.
 * @param {sap.ui.unified.MenuItemBase}
 *            oItem the item to add; to add; if empty, nothing is inserted
 * @returns {sap.ui.unified.Menu} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.Menu.prototype.addItem = function(oItem) { return new sap.ui.unified.Menu(); };

/**
 * Attaches event handler <code>fnFunction</code> to the 'itemSelect' event of this <code>sap.ui.unified.Menu</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise it will be bound to this <code>sap.ui.unified.Menu</code> itself.
 * 
 * Fired on the root menu of a menu hierarchy whenever a user selects an item within the menu or within one of its direct or indirect submenus.
 * <b>Note:</b> There is also a select event available for each single menu item. This event and the event of the menu items are redundant.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to be called when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.unified.Menu</code> itself.
 * @returns {sap.ui.unified.Menu} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.Menu.prototype.attachItemSelect = function(oData,fnFunction,oListener) { return new sap.ui.unified.Menu(); };

/**
 * Closes the menu.
 * @type void
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.unified.Menu.prototype.close = function() { return null; };

/**
 * Destroys all the items in the aggregation
 * named <code>items</code>.
 * @returns {sap.ui.unified.Menu} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.Menu.prototype.destroyItems = function() { return new sap.ui.unified.Menu(); };

/**
 * Detaches event handler <code>fnFunction</code> from the 'itemSelect' event of this <code>sap.ui.unified.Menu</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @returns {sap.ui.unified.Menu} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.Menu.prototype.detachItemSelect = function(fnFunction,oListener) { return new sap.ui.unified.Menu(); };

/**
 * Creates a new subclass of class sap.ui.unified.Menu with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object. If not given, it defaults to <code>sap.ui.core.ElementMetadata</code>.
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.unified.Menu.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event itemSelect to attached listeners.
 * 
 * Expects the following event parameters:
 * <ul>
 * <li>'item' of type <code>sap.ui.unified.MenuItemBase</code>The action (item) which was selected by the user.</li>
 * </ul>
 * @param {Map} [mArguments] The arguments to pass along with the event.
 * @returns {sap.ui.unified.Menu} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.unified.Menu.prototype.fireItemSelect = function(mArguments) { return new sap.ui.unified.Menu(); };

/**
 * Gets current value of property <code>ariaDescription</code>.
 * 
 * Accessible label / description of the menu for assistive technologies like screenreaders.
 * @returns {string} Value of property <code>ariaDescription</code>
 * @deprecated Since version 1.27.0 Please use association <code>ariaLabelledBy</code> instead.
 * @public
 * 
 */
sap.ui.unified.Menu.prototype.getAriaDescription = function() { return ""; };

/**
 * Returns array of IDs of the elements which are the current targets of the <code>ariaLabelledBy</code> association.
 * 
 * Reference to accessible labels (ids of existing DOM elements or controls) for assistive technologies like screenreaders.
 * @returns {sap.ui.core.Control[]}
 * @since 1.26.3
 * @public
 * 
 */
sap.ui.unified.Menu.prototype.getAriaLabelledBy = function() { return new Array(); };

/**
 * Gets current value of property <code>enabled</code>.
 * 
 * When a menu is disabled none of its items can be selected by the user.
 * The enabled property of an item (@link sap.ui.unified.MenuItemBase#getEnabled) has no effect when the menu of the item is disabled.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>enabled</code>
 * @public
 * 
 */
sap.ui.unified.Menu.prototype.getEnabled = function() { return false; };

/**
 * Gets content of aggregation <code>items</code>.
 * 
 * The available actions to be displayed as items of the menu.
 * @returns {sap.ui.unified.MenuItemBase[]}
 * @public
 * 
 */
sap.ui.unified.Menu.prototype.getItems = function() { return new Array(); };

/**
 * Gets current value of property <code>maxVisibleItems</code>.
 * 
 * The maximum number of items which are displayed before an overflow mechanism takes effect.
 * A value smaller than 1 means an infinite number of visible items.
 * The overall height of the menu is limited by the height of the screen. If the maximum possible height is reached, an
 * overflow takes effect, even if the maximum number of visible items is not yet reached.
 * 
 * Default value is <code>0</code>.
 * @returns {int} Value of property <code>maxVisibleItems</code>
 * @public
 * 
 */
sap.ui.unified.Menu.prototype.getMaxVisibleItems = function() { return 0; };

/**
 * Returns a metadata object for class sap.ui.unified.Menu.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.unified.Menu.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property <code>pageSize</code>.
 * 
 * The keyboard can be used to navigate through the items of a menu. Beside the arrow keys for single steps and the <i>Home</i> / <i>End</i> keys for jumping
 * to the first / last item, the <i>Page Up</i> / <i>Page Down</i> keys can be used to jump an arbitrary number of items up or down. This number can be defined via the <code>pageSize</code> property.
 * For values smaller than 1, paging behaves in a similar way to when using the <i>Home</i> / <i>End</i> keys. If the value equals 1, the paging behavior is similar to that of the arrow keys.
 * 
 * Default value is <code>5</code>.
 * @returns {int} Value of property <code>pageSize</code>
 * @since 1.25.0
 * @public
 * 
 */
sap.ui.unified.Menu.prototype.getPageSize = function() { return 0; };

/**
 * Checks for the provided <code>sap.ui.unified.MenuItemBase</code> in the aggregation named <code>items</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.unified.MenuItemBase}
 *           oItem The item whose index is looked for.
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.unified.Menu.prototype.indexOfItem = function(oItem) { return 0; };

/**
 * Inserts a item into the aggregation named <code>items</code>.
 * @param {sap.ui.unified.MenuItemBase}
 *            oItem the item to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the item should be inserted at; for
 *              a negative value of <code>iIndex</code>, the item is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the item is inserted at
 *              the last position
 * @returns {sap.ui.unified.Menu} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.Menu.prototype.insertItem = function(oItem,iIndex) { return new sap.ui.unified.Menu(); };

/**
 * Opens the menu at the specified position.
 * 
 * The position of the menu is defined relative to an element in the visible DOM by specifying
 * the docking location of the menu and of the related element. 
 * 
 * See {@link sap.ui.core.Popup#open Popup#open} for further details about popup positioning.
 * @param {boolean} bWithKeyboard Indicates whether or not the first item shall be highlighted when the menu is opened (keyboard case)
 * @param {sap.ui.core.Element|DOMRef} oOpenerRef The element which will get the focus back again after the menu was closed
 * @param {sap.ui.core.Dock} sMy The reference docking location of the menu for positioning the menu on the screen
 * @param {sap.ui.core.Dock} sAt The 'of' element's reference docking location for positioning the menu on the screen
 * @param {sap.ui.core.Element|DOMRef} oOf The menu is positioned relatively to this element based on the given dock locations
 * @param {string} [sOffset] The offset relative to the docking point, specified as a string with space-separated pixel values (e.g. "0 10" to move the popup 10 pixels to the right)
 * @param {sap.ui.core.Collision} [sCollision] The collision defines how the position of the menu should be adjusted in case it overflows the window in some direction
 * @type void
 * @public
 * @ui5-metamodel This method will also be described in the UI5 (legacy) design time meta model
 * 
 */
sap.ui.unified.Menu.prototype.open = function(bWithKeyboard,oOpenerRef,sMy,sAt,oOf,sOffset,sCollision) { return null; };

/**
 * Removes all the controls in the association named <code>ariaLabelledBy</code>.
 * @returns {sap.ui.core.Control[]} An array of the removed elements (might be empty)
 * @since 1.26.3
 * @public
 * 
 */
sap.ui.unified.Menu.prototype.removeAllAriaLabelledBy = function() { return new Array(); };

/**
 * Removes all the controls in the aggregation named <code>items</code>.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.unified.MenuItemBase[]} An array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.unified.Menu.prototype.removeAllItems = function() { return new Array(); };

/**
 * Removes an ariaLabelledBy from the association named <code>ariaLabelledBy</code>.
 * @param {int | string | sap.ui.core.Control} vAriaLabelledBy The ariaLabelledByto be removed or its index or ID
 * @returns {sap.ui.core.Control} the removed ariaLabelledBy or <code>null</code>
 * @since 1.26.3
 * @public
 * 
 */
sap.ui.unified.Menu.prototype.removeAriaLabelledBy = function(vAriaLabelledBy) { return new sap.ui.core.Control(); };

/**
 * Removes a item from the aggregation named <code>items</code>.
 * @param {int | string | sap.ui.unified.MenuItemBase} vItem The itemto remove or its index or id
 * @returns {sap.ui.unified.MenuItemBase} The removed item or <code>null</code>
 * @public
 * 
 */
sap.ui.unified.Menu.prototype.removeItem = function(vItem) { return new sap.ui.unified.MenuItemBase(); };

/**
 * Sets a new value for property <code>ariaDescription</code>.
 * 
 * Accessible label / description of the menu for assistive technologies like screenreaders.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sAriaDescription New value for property <code>ariaDescription</code>
 * @returns {sap.ui.unified.Menu} Reference to <code>this</code> in order to allow method chaining
 * @deprecated Since version 1.27.0 Please use association <code>ariaLabelledBy</code> instead.
 * @public
 * 
 */
sap.ui.unified.Menu.prototype.setAriaDescription = function(sAriaDescription) { return new sap.ui.unified.Menu(); };

/**
 * Sets a new value for property <code>enabled</code>.
 * 
 * When a menu is disabled none of its items can be selected by the user.
 * The enabled property of an item (@link sap.ui.unified.MenuItemBase#getEnabled) has no effect when the menu of the item is disabled.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bEnabled New value for property <code>enabled</code>
 * @returns {sap.ui.unified.Menu} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.Menu.prototype.setEnabled = function(bEnabled) { return new sap.ui.unified.Menu(); };

/**
 * Sets a new value for property <code>maxVisibleItems</code>.
 * 
 * The maximum number of items which are displayed before an overflow mechanism takes effect.
 * A value smaller than 1 means an infinite number of visible items.
 * The overall height of the menu is limited by the height of the screen. If the maximum possible height is reached, an
 * overflow takes effect, even if the maximum number of visible items is not yet reached.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>0</code>.
 * @param {int} iMaxVisibleItems New value for property <code>maxVisibleItems</code>
 * @returns {sap.ui.unified.Menu} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.Menu.prototype.setMaxVisibleItems = function(iMaxVisibleItems) { return new sap.ui.unified.Menu(); };

/**
 * Sets a new value for property <code>pageSize</code>.
 * 
 * The keyboard can be used to navigate through the items of a menu. Beside the arrow keys for single steps and the <i>Home</i> / <i>End</i> keys for jumping
 * to the first / last item, the <i>Page Up</i> / <i>Page Down</i> keys can be used to jump an arbitrary number of items up or down. This number can be defined via the <code>pageSize</code> property.
 * For values smaller than 1, paging behaves in a similar way to when using the <i>Home</i> / <i>End</i> keys. If the value equals 1, the paging behavior is similar to that of the arrow keys.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>5</code>.
 * @param {int} iPageSize New value for property <code>pageSize</code>
 * @returns {sap.ui.unified.Menu} Reference to <code>this</code> in order to allow method chaining
 * @since 1.25.0
 * @public
 * 
 */
sap.ui.unified.Menu.prototype.setPageSize = function(iPageSize) { return new sap.ui.unified.Menu(); };


// ---- sap.ui.unified.MenuItem --------------------------------------------------------------------------

/**
 * Constructor for a new MenuItem element.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getText text} : string (default: )</li>
 * <li>{@link #getIcon icon} : sap.ui.core.URI (default: )</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.unified.MenuItemBase#constructor sap.ui.unified.MenuItemBase}
 * can be used as well.
 * @param {string} [sId] Id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] Initial settings for the new control
 * @class
 * Standard item to be used inside a menu. A menu item represents an action which can be selected by the user in the menu or
 * it can provide a submenu to organize the actions hierarchically.
 * @extends sap.ui.unified.MenuItemBase
 * @version 1.32.7
 * @since 1.21.0
 * @constructor
 * @public
 * @ui5-metamodel This control/element will also be described in the UI5 (legacy) design time meta model
 * 
 */
sap.ui.unified.MenuItem = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.ui.unified.MenuItem with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.unified.MenuItemBase.extend}.
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object. If not given, it defaults to <code>sap.ui.core.ElementMetadata</code>.
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.unified.MenuItem.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property <code>icon</code>.
 * 
 * Defines the icon of the {@link sap.ui.core.IconPool sap.ui.core.IconPool} or an image which should be displayed on the item.
 * 
 * Default value is <code></code>.
 * @returns {sap.ui.core.URI} Value of property <code>icon</code>
 * @public
 * 
 */
sap.ui.unified.MenuItem.prototype.getIcon = function() { return new sap.ui.core.URI(); };

/**
 * Returns a metadata object for class sap.ui.unified.MenuItem.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.unified.MenuItem.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property <code>text</code>.
 * 
 * Defines the text which should be displayed on the item.
 * 
 * Default value is <code></code>.
 * @returns {string} Value of property <code>text</code>
 * @public
 * 
 */
sap.ui.unified.MenuItem.prototype.getText = function() { return ""; };

/**
 * Sets a new value for property <code>icon</code>.
 * 
 * Defines the icon of the {@link sap.ui.core.IconPool sap.ui.core.IconPool} or an image which should be displayed on the item.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code></code>.
 * @param {sap.ui.core.URI} sIcon New value for property <code>icon</code>
 * @returns {sap.ui.unified.MenuItem} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.MenuItem.prototype.setIcon = function(sIcon) { return new sap.ui.unified.MenuItem(); };

/**
 * Sets a new value for property <code>text</code>.
 * 
 * Defines the text which should be displayed on the item.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code></code>.
 * @param {string} sText New value for property <code>text</code>
 * @returns {sap.ui.unified.MenuItem} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.MenuItem.prototype.setText = function(sText) { return new sap.ui.unified.MenuItem(); };


// ---- sap.ui.unified.MenuItemBase --------------------------------------------------------------------------

/**
 * Abstract base class <code>MenuItemBase</code> for menu item elements. Please use concrete subclasses.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getEnabled enabled} : boolean (default: true)</li>
 * <li>{@link #getVisible visible} : boolean (default: true)</li>
 * <li>{@link #getStartsSection startsSection} : boolean (default: false)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getSubmenu submenu} : sap.ui.unified.Menu (default)</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:select select} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * @param {string} [sId] Id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] Initial settings for the new control
 * @class
 * Abstract base class for menu item which provides common properties and events for all concrete item implementations.
 * @abstract
 * @extends sap.ui.core.Element
 * @version 1.32.7
 * @since 1.21.0
 * @constructor
 * @public
 * @ui5-metamodel This control/element will also be described in the UI5 (legacy) design time meta model
 * 
 */
sap.ui.unified.MenuItemBase = function(sId,mSettings) {};
/**
 * Fired when the item is selected by the user.
 * <b>Note:</b> The event is also available for items which have a submenu.
 * In general, applications must not handle event in this case because the user selection opens the sub menu.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {sap.ui.unified.MenuItemBase} oControlEvent.getParameters.item The current item
 * @public
 * 
 */
sap.ui.unified.MenuItemBase.prototype.select = function(oControlEvent) {  };

/**
 * Attaches event handler <code>fnFunction</code> to the 'select' event of this <code>sap.ui.unified.MenuItemBase</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise it will be bound to this <code>sap.ui.unified.MenuItemBase</code> itself.
 * 
 * Fired when the item is selected by the user.
 * <b>Note:</b> The event is also available for items which have a submenu.
 * In general, applications must not handle event in this case because the user selection opens the sub menu.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to be called when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.unified.MenuItemBase</code> itself.
 * @returns {sap.ui.unified.MenuItemBase} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.MenuItemBase.prototype.attachSelect = function(oData,fnFunction,oListener) { return new sap.ui.unified.MenuItemBase(); };

/**
 * Destroys the submenu in the aggregation
 * named <code>submenu</code>.
 * @returns {sap.ui.unified.MenuItemBase} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.MenuItemBase.prototype.destroySubmenu = function() { return new sap.ui.unified.MenuItemBase(); };

/**
 * Detaches event handler <code>fnFunction</code> from the 'select' event of this <code>sap.ui.unified.MenuItemBase</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @returns {sap.ui.unified.MenuItemBase} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.MenuItemBase.prototype.detachSelect = function(fnFunction,oListener) { return new sap.ui.unified.MenuItemBase(); };

/**
 * Creates a new subclass of class sap.ui.unified.MenuItemBase with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object. If not given, it defaults to <code>sap.ui.core.ElementMetadata</code>.
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.unified.MenuItemBase.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event select to attached listeners.
 * 
 * Expects the following event parameters:
 * <ul>
 * <li>'item' of type <code>sap.ui.unified.MenuItemBase</code>The current item</li>
 * </ul>
 * @param {Map} [mArguments] The arguments to pass along with the event.
 * @returns {sap.ui.unified.MenuItemBase} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.unified.MenuItemBase.prototype.fireSelect = function(mArguments) { return new sap.ui.unified.MenuItemBase(); };

/**
 * Gets current value of property <code>enabled</code>.
 * 
 * When an item is disabled the item can not be selected by the user.
 * The enabled property of the item has no effect when the menu of the item is disabled ({@link sap.ui.unified.Menu#getEnabled Menu#getEnabled}).
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>enabled</code>
 * @public
 * 
 */
sap.ui.unified.MenuItemBase.prototype.getEnabled = function() { return false; };

/**
 * Returns a metadata object for class sap.ui.unified.MenuItemBase.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.unified.MenuItemBase.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property <code>startsSection</code>.
 * 
 * Defines whether a visual separator should be rendered before the item.
 * <b>Note:</b> If an item is invisible also the separator of this item is not shown.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>startsSection</code>
 * @public
 * 
 */
sap.ui.unified.MenuItemBase.prototype.getStartsSection = function() { return false; };

/**
 * Gets content of aggregation <code>submenu</code>.
 * 
 * An optional submenu of the item which is opened when the item is selected by the user.
 * @returns {sap.ui.unified.Menu}
 * @public
 * 
 */
sap.ui.unified.MenuItemBase.prototype.getSubmenu = function() { return new sap.ui.unified.Menu(); };

/**
 * Gets current value of property <code>visible</code>.
 * 
 * Invisible items do not appear in the menu.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>visible</code>
 * @public
 * 
 */
sap.ui.unified.MenuItemBase.prototype.getVisible = function() { return false; };

/**
 * Changes the visual hover state of the menu item.
 * 
 * Subclasses may override this function.
 * @param {boolean} bHovered Specifies whether the item is currently hovered or not.
 * @param {sap.ui.unified.Menu} oMenu The menu to which this item belongs
 * @protected
 * 
 */
sap.ui.unified.MenuItemBase.prototype.hover = function(bHovered,oMenu) {  };

/**
 * Informs the item that the item HTML is now applied to the DOM.
 * 
 * Subclasses may override this function.
 * @protected
 * 
 */
sap.ui.unified.MenuItemBase.prototype.onAfterRendering = function() {  };

/**
 * Event handler which is called whenever the submenu of the item is opened or closed.
 * 
 * Subclasses may override this function.
 * @param {boolean} bOpened Specifies whether the submenu of the item is opened or closed
 * @protected
 * 
 */
sap.ui.unified.MenuItemBase.prototype.onSubmenuToggle = function(bOpened) {  };

/**
 * Produces the HTML of an item and writes it to render-output-buffer during the rendering of the corresponding menu.
 * 
 * Subclasses may override this function.
 * @param {sap.ui.core.RenderManager} oRenderManager The <code>RenderManager</code> that can be used for writing to the render-output-buffer
 * @param {sap.ui.unified.MenuItemBase} oItem The item which should be rendered
 * @param {sap.ui.unified.Menu} oMenu The menu to which this item belongs
 * @protected
 * 
 */
sap.ui.unified.MenuItemBase.prototype.render = function(oRenderManager,oItem,oMenu) {  };

/**
 * Sets a new value for property <code>enabled</code>.
 * 
 * When an item is disabled the item can not be selected by the user.
 * The enabled property of the item has no effect when the menu of the item is disabled ({@link sap.ui.unified.Menu#getEnabled Menu#getEnabled}).
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bEnabled New value for property <code>enabled</code>
 * @returns {sap.ui.unified.MenuItemBase} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.MenuItemBase.prototype.setEnabled = function(bEnabled) { return new sap.ui.unified.MenuItemBase(); };

/**
 * Sets a new value for property <code>startsSection</code>.
 * 
 * Defines whether a visual separator should be rendered before the item.
 * <b>Note:</b> If an item is invisible also the separator of this item is not shown.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bStartsSection New value for property <code>startsSection</code>
 * @returns {sap.ui.unified.MenuItemBase} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.MenuItemBase.prototype.setStartsSection = function(bStartsSection) { return new sap.ui.unified.MenuItemBase(); };

/**
 * Sets the aggregated <code>submenu</code>.
 * @param {sap.ui.unified.Menu} oSubmenu The submenu to set
 * @returns {sap.ui.unified.MenuItemBase} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.MenuItemBase.prototype.setSubmenu = function(oSubmenu) { return new sap.ui.unified.MenuItemBase(); };

/**
 * Sets a new value for property <code>visible</code>.
 * 
 * Invisible items do not appear in the menu.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bVisible New value for property <code>visible</code>
 * @returns {sap.ui.unified.MenuItemBase} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.MenuItemBase.prototype.setVisible = function(bVisible) { return new sap.ui.unified.MenuItemBase(); };


// ---- sap.ui.unified.MenuTextFieldItem --------------------------------------------------------------------------

/**
 * Constructor for a new MenuTextFieldItem element.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getLabel label} : string</li>
 * <li>{@link #getIcon icon} : sap.ui.core.URI</li>
 * <li>{@link #getValue value} : string</li>
 * <li>{@link #getValueState valueState} : sap.ui.core.ValueState (default: None)</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.unified.MenuItemBase#constructor sap.ui.unified.MenuItemBase}
 * can be used as well.
 * @param {string} [sId] Id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] Initial settings for the new control
 * @class
 * Special menu item which contains a label and a text field. This menu item is e.g. helpful for filter implementations.
 * The aggregation <code>submenu</code> (inherited from parent class) is not supported for this type of menu item.
 * @extends sap.ui.unified.MenuItemBase
 * @version 1.32.7
 * @since 1.21.0
 * @constructor
 * @public
 * @ui5-metamodel This control/element will also be described in the UI5 (legacy) design time meta model
 * 
 */
sap.ui.unified.MenuTextFieldItem = function(sId,mSettings) {};
/**
 * The aggregation <code>submenu</code> (inherited from parent class) is not supported for this type of menu item.
 * @return {sap.ui.unified.MenuTextFieldItem} <code>this</code> to allow method chaining
 * @public
 * @deprecated The aggregation <code>submenu</code> (inherited from parent class) is not supported for this type of menu item.
 * 
 */
sap.ui.unified.MenuTextFieldItem.prototype.destroySubmenu = function() { return new sap.ui.unified.MenuTextFieldItem(); };

/**
 * Creates a new subclass of class sap.ui.unified.MenuTextFieldItem with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.unified.MenuItemBase.extend}.
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object. If not given, it defaults to <code>sap.ui.core.ElementMetadata</code>.
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.unified.MenuTextFieldItem.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property <code>icon</code>.
 * 
 * Defines the icon of the {@link sap.ui.core.IconPool sap.ui.core.IconPool} or an image which should be displayed on the item.
 * @returns {sap.ui.core.URI} Value of property <code>icon</code>
 * @public
 * 
 */
sap.ui.unified.MenuTextFieldItem.prototype.getIcon = function() { return new sap.ui.core.URI(); };

/**
 * Gets current value of property <code>label</code>.
 * 
 * Defines the label of the text field of the item.
 * @returns {string} Value of property <code>label</code>
 * @public
 * 
 */
sap.ui.unified.MenuTextFieldItem.prototype.getLabel = function() { return ""; };

/**
 * Returns a metadata object for class sap.ui.unified.MenuTextFieldItem.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.unified.MenuTextFieldItem.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * The aggregation <code>submenu</code> (inherited from parent class) is not supported for this type of menu item.
 * @return {sap.ui.unified.Menu}
 * @public
 * @deprecated The aggregation <code>submenu</code> (inherited from parent class) is not supported for this type of menu item.
 * 
 */
sap.ui.unified.MenuTextFieldItem.prototype.getSubmenu = function() { return new sap.ui.unified.Menu(); };

/**
 * Gets current value of property <code>value</code>.
 * 
 * Defines the value of the text field of the item.
 * @returns {string} Value of property <code>value</code>
 * @public
 * 
 */
sap.ui.unified.MenuTextFieldItem.prototype.getValue = function() { return ""; };

/**
 * Gets current value of property <code>valueState</code>.
 * 
 * Defines the value state of the text field of the item. This allows you to visualize e.g. warnings or errors.
 * 
 * Default value is <code>None</code>.
 * @returns {sap.ui.core.ValueState} Value of property <code>valueState</code>
 * @public
 * 
 */
sap.ui.unified.MenuTextFieldItem.prototype.getValueState = function() { return new sap.ui.core.ValueState(); };

/**
 * Sets a new value for property <code>icon</code>.
 * 
 * Defines the icon of the {@link sap.ui.core.IconPool sap.ui.core.IconPool} or an image which should be displayed on the item.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {sap.ui.core.URI} sIcon New value for property <code>icon</code>
 * @returns {sap.ui.unified.MenuTextFieldItem} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.MenuTextFieldItem.prototype.setIcon = function(sIcon) { return new sap.ui.unified.MenuTextFieldItem(); };

/**
 * Sets a new value for property <code>label</code>.
 * 
 * Defines the label of the text field of the item.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sLabel New value for property <code>label</code>
 * @returns {sap.ui.unified.MenuTextFieldItem} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.MenuTextFieldItem.prototype.setLabel = function(sLabel) { return new sap.ui.unified.MenuTextFieldItem(); };

/**
 * The aggregation <code>submenu</code> (inherited from parent class) is not supported for this type of menu item.
 * @param {sap.ui.unified.Menu} oSubmenu
 * @return {sap.ui.unified.MenuTextFieldItem} <code>this</code> to allow method chaining
 * @public
 * @deprecated The aggregation <code>submenu</code> (inherited from parent class) is not supported for this type of menu item.
 * 
 */
sap.ui.unified.MenuTextFieldItem.prototype.setSubmenu = function(oSubmenu) { return new sap.ui.unified.MenuTextFieldItem(); };

/**
 * Sets a new value for property <code>value</code>.
 * 
 * Defines the value of the text field of the item.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sValue New value for property <code>value</code>
 * @returns {sap.ui.unified.MenuTextFieldItem} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.MenuTextFieldItem.prototype.setValue = function(sValue) { return new sap.ui.unified.MenuTextFieldItem(); };

/**
 * Sets a new value for property <code>valueState</code>.
 * 
 * Defines the value state of the text field of the item. This allows you to visualize e.g. warnings or errors.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>None</code>.
 * @param {sap.ui.core.ValueState} sValueState New value for property <code>valueState</code>
 * @returns {sap.ui.unified.MenuTextFieldItem} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.MenuTextFieldItem.prototype.setValueState = function(sValueState) { return new sap.ui.unified.MenuTextFieldItem(); };


// ---- sap.ui.unified.Shell --------------------------------------------------------------------------

/**
 * Constructor for a new Shell.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getIcon icon} : sap.ui.core.URI</li>
 * <li>{@link #getShowCurtain showCurtain} : boolean</li>
 * <li>{@link #getShowCurtainPane showCurtainPane} : boolean</li>
 * <li>{@link #getSearchVisible searchVisible} : boolean (default: true)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getCurtainContent curtainContent} : sap.ui.core.Control[]</li>
 * <li>{@link #getCurtainPaneContent curtainPaneContent} : sap.ui.core.Control[]</li>
 * <li>{@link #getHeadItems headItems} : sap.ui.unified.ShellHeadItem[]</li>
 * <li>{@link #getHeadEndItems headEndItems} : sap.ui.unified.ShellHeadItem[]</li>
 * <li>{@link #getSearch search} : sap.ui.core.Control</li>
 * <li>{@link #getUser user} : sap.ui.unified.ShellHeadUserItem</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.unified.ShellLayout#constructor sap.ui.unified.ShellLayout}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * The shell control is meant as root control (full-screen) of an application.
 * It was build as root control of the Fiori Launchpad application and provides the basic capabilities
 * for this purpose. Do not use this control within applications which run inside the Fiori Lauchpad and
 * do not use it for other scenarios than the root control usecase.
 * @extends sap.ui.unified.ShellLayout
 * @version 1.32.7
 * @constructor
 * @public
 * @since 1.15.1
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.unified.Shell = function(sId,mSettings) {};
/**
 * Adds some curtainContent into the aggregation named <code>curtainContent</code>.
 * @param {sap.ui.core.Control}
 *            oCurtainContent the curtainContent to add; to add; if empty, nothing is inserted
 * @returns {sap.ui.unified.Shell} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.addCurtainContent = function(oCurtainContent) { return new sap.ui.unified.Shell(); };

/**
 * Adds some curtainPaneContent into the aggregation named <code>curtainPaneContent</code>.
 * @param {sap.ui.core.Control}
 *            oCurtainPaneContent the curtainPaneContent to add; to add; if empty, nothing is inserted
 * @returns {sap.ui.unified.Shell} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.addCurtainPaneContent = function(oCurtainPaneContent) { return new sap.ui.unified.Shell(); };

/**
 * Adds some headEndItem into the aggregation named <code>headEndItems</code>.
 * @param {sap.ui.unified.ShellHeadItem}
 *            oHeadEndItem the headEndItem to add; to add; if empty, nothing is inserted
 * @returns {sap.ui.unified.Shell} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.addHeadEndItem = function(oHeadEndItem) { return new sap.ui.unified.Shell(); };

/**
 * Adds some headItem into the aggregation named <code>headItems</code>.
 * @param {sap.ui.unified.ShellHeadItem}
 *            oHeadItem the headItem to add; to add; if empty, nothing is inserted
 * @returns {sap.ui.unified.Shell} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.addHeadItem = function(oHeadItem) { return new sap.ui.unified.Shell(); };

/**
 * Destroys all the curtainContent in the aggregation
 * named <code>curtainContent</code>.
 * @returns {sap.ui.unified.Shell} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.destroyCurtainContent = function() { return new sap.ui.unified.Shell(); };

/**
 * Destroys all the curtainPaneContent in the aggregation
 * named <code>curtainPaneContent</code>.
 * @returns {sap.ui.unified.Shell} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.destroyCurtainPaneContent = function() { return new sap.ui.unified.Shell(); };

/**
 * Destroys all the headEndItems in the aggregation
 * named <code>headEndItems</code>.
 * @returns {sap.ui.unified.Shell} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.destroyHeadEndItems = function() { return new sap.ui.unified.Shell(); };

/**
 * Destroys the header in the aggregation named <code>header</code>, but only if a custom header is set.
 * The default header can not be destroyed.
 * @return {sap.ui.unified.Shell} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.destroyHeader = function() { return new sap.ui.unified.Shell(); };

/**
 * Destroys all the headItems in the aggregation
 * named <code>headItems</code>.
 * @returns {sap.ui.unified.Shell} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.destroyHeadItems = function() { return new sap.ui.unified.Shell(); };

/**
 * Destroys the search in the aggregation
 * named <code>search</code>.
 * @returns {sap.ui.unified.Shell} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.destroySearch = function() { return new sap.ui.unified.Shell(); };

/**
 * Destroys the user in the aggregation
 * named <code>user</code>.
 * @returns {sap.ui.unified.Shell} Reference to <code>this</code> in order to allow method chaining
 * @since 1.22.0
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.destroyUser = function() { return new sap.ui.unified.Shell(); };

/**
 * Creates a new subclass of class sap.ui.unified.Shell with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.unified.ShellLayout.extend}.
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object. If not given, it defaults to <code>sap.ui.core.ElementMetadata</code>.
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.unified.Shell.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets content of aggregation <code>curtainContent</code>.
 * 
 * The content to appear in the curtain area.
 * @returns {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.getCurtainContent = function() { return new Array(); };

/**
 * Gets content of aggregation <code>curtainPaneContent</code>.
 * 
 * The content to appear in the pane area of the curtain.
 * @returns {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.getCurtainPaneContent = function() { return new Array(); };

/**
 * Gets content of aggregation <code>headEndItems</code>.
 * 
 * The buttons shown in the end (right in left-to-right case) of the Shell header. Currently max. 3 visible buttons are supported (when user is set only 1). If a custom header is set this aggregation has no effect.
 * @returns {sap.ui.unified.ShellHeadItem[]}
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.getHeadEndItems = function() { return new Array(); };

/**
 * Gets content of aggregation <code>headItems</code>.
 * 
 * The buttons shown in the begin (left in left-to-right case) of the Shell header. Currently max. 3 visible buttons are supported. If a custom header is set this aggregation has no effect.
 * @returns {sap.ui.unified.ShellHeadItem[]}
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.getHeadItems = function() { return new Array(); };

/**
 * Gets current value of property <code>icon</code>.
 * 
 * The application icon. If a custom header is set this property has no effect.
 * @returns {sap.ui.core.URI} Value of property <code>icon</code>
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.getIcon = function() { return new sap.ui.core.URI(); };

/**
 * Returns a metadata object for class sap.ui.unified.Shell.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.unified.Shell.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets content of aggregation <code>search</code>.
 * 
 * Experimental (This aggregation might change in future!): The search control which should be displayed in the shell header. If a custom header is set this aggregation has no effect.
 * @returns {sap.ui.core.Control}
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.getSearch = function() { return new sap.ui.core.Control(); };

/**
 * Gets current value of property <code>searchVisible</code>.
 * 
 * If set to false, the search area (aggregation 'search') is hidden. If a custom header is set this property has no effect.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>searchVisible</code>
 * @since 1.18
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.getSearchVisible = function() { return false; };

/**
 * Gets current value of property <code>showCurtain</code>.
 * 
 * Shows / Hides the curtain.
 * @returns {boolean} Value of property <code>showCurtain</code>
 * @deprecated Since version 1.16.3. 
 * Curtain is deprecated and replaced by ShellOverlay mechanism.
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.getShowCurtain = function() { return false; };

/**
 * Gets current value of property <code>showCurtainPane</code>.
 * 
 * Shows / Hides the side pane on the curtain.
 * @returns {boolean} Value of property <code>showCurtainPane</code>
 * @deprecated Since version 1.16.3. 
 * Curtain is deprecated and replaced by ShellOverlay mechanism.
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.getShowCurtainPane = function() { return false; };

/**
 * Gets content of aggregation <code>user</code>.
 * 
 * The user item which is rendered in the shell header beside the items. If a custom header is set this aggregation has no effect.
 * @returns {sap.ui.unified.ShellHeadUserItem}
 * @since 1.22.0
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.getUser = function() { return new sap.ui.unified.ShellHeadUserItem(); };

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>curtainContent</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *           oCurtainContent The curtainContent whose index is looked for.
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.indexOfCurtainContent = function(oCurtainContent) { return 0; };

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>curtainPaneContent</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *           oCurtainPaneContent The curtainPaneContent whose index is looked for.
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.indexOfCurtainPaneContent = function(oCurtainPaneContent) { return 0; };

/**
 * Checks for the provided <code>sap.ui.unified.ShellHeadItem</code> in the aggregation named <code>headEndItems</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.unified.ShellHeadItem}
 *           oHeadEndItem The headEndItem whose index is looked for.
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.indexOfHeadEndItem = function(oHeadEndItem) { return 0; };

/**
 * Checks for the provided <code>sap.ui.unified.ShellHeadItem</code> in the aggregation named <code>headItems</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.unified.ShellHeadItem}
 *           oHeadItem The headItem whose index is looked for.
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.indexOfHeadItem = function(oHeadItem) { return 0; };

/**
 * Inserts a curtainContent into the aggregation named <code>curtainContent</code>.
 * @param {sap.ui.core.Control}
 *            oCurtainContent the curtainContent to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the curtainContent should be inserted at; for
 *              a negative value of <code>iIndex</code>, the curtainContent is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the curtainContent is inserted at
 *              the last position
 * @returns {sap.ui.unified.Shell} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.insertCurtainContent = function(oCurtainContent,iIndex) { return new sap.ui.unified.Shell(); };

/**
 * Inserts a curtainPaneContent into the aggregation named <code>curtainPaneContent</code>.
 * @param {sap.ui.core.Control}
 *            oCurtainPaneContent the curtainPaneContent to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the curtainPaneContent should be inserted at; for
 *              a negative value of <code>iIndex</code>, the curtainPaneContent is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the curtainPaneContent is inserted at
 *              the last position
 * @returns {sap.ui.unified.Shell} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.insertCurtainPaneContent = function(oCurtainPaneContent,iIndex) { return new sap.ui.unified.Shell(); };

/**
 * Inserts a headEndItem into the aggregation named <code>headEndItems</code>.
 * @param {sap.ui.unified.ShellHeadItem}
 *            oHeadEndItem the headEndItem to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the headEndItem should be inserted at; for
 *              a negative value of <code>iIndex</code>, the headEndItem is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the headEndItem is inserted at
 *              the last position
 * @returns {sap.ui.unified.Shell} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.insertHeadEndItem = function(oHeadEndItem,iIndex) { return new sap.ui.unified.Shell(); };

/**
 * Inserts a headItem into the aggregation named <code>headItems</code>.
 * @param {sap.ui.unified.ShellHeadItem}
 *            oHeadItem the headItem to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the headItem should be inserted at; for
 *              a negative value of <code>iIndex</code>, the headItem is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the headItem is inserted at
 *              the last position
 * @returns {sap.ui.unified.Shell} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.insertHeadItem = function(oHeadItem,iIndex) { return new sap.ui.unified.Shell(); };

/**
 * Removes all the controls in the aggregation named <code>curtainContent</code>.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.core.Control[]} An array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.removeAllCurtainContent = function() { return new Array(); };

/**
 * Removes all the controls in the aggregation named <code>curtainPaneContent</code>.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.core.Control[]} An array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.removeAllCurtainPaneContent = function() { return new Array(); };

/**
 * Removes all the controls in the aggregation named <code>headEndItems</code>.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.unified.ShellHeadItem[]} An array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.removeAllHeadEndItems = function() { return new Array(); };

/**
 * Removes all the controls in the aggregation named <code>headItems</code>.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.unified.ShellHeadItem[]} An array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.removeAllHeadItems = function() { return new Array(); };

/**
 * Removes a curtainContent from the aggregation named <code>curtainContent</code>.
 * @param {int | string | sap.ui.core.Control} vCurtainContent The curtainContentto remove or its index or id
 * @returns {sap.ui.core.Control} The removed curtainContent or <code>null</code>
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.removeCurtainContent = function(vCurtainContent) { return new sap.ui.core.Control(); };

/**
 * Removes a curtainPaneContent from the aggregation named <code>curtainPaneContent</code>.
 * @param {int | string | sap.ui.core.Control} vCurtainPaneContent The curtainPaneContentto remove or its index or id
 * @returns {sap.ui.core.Control} The removed curtainPaneContent or <code>null</code>
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.removeCurtainPaneContent = function(vCurtainPaneContent) { return new sap.ui.core.Control(); };

/**
 * Removes a headEndItem from the aggregation named <code>headEndItems</code>.
 * @param {int | string | sap.ui.unified.ShellHeadItem} vHeadEndItem The headEndItemto remove or its index or id
 * @returns {sap.ui.unified.ShellHeadItem} The removed headEndItem or <code>null</code>
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.removeHeadEndItem = function(vHeadEndItem) { return new sap.ui.unified.ShellHeadItem(); };

/**
 * Removes a headItem from the aggregation named <code>headItems</code>.
 * @param {int | string | sap.ui.unified.ShellHeadItem} vHeadItem The headItemto remove or its index or id
 * @returns {sap.ui.unified.ShellHeadItem} The removed headItem or <code>null</code>
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.removeHeadItem = function(vHeadItem) { return new sap.ui.unified.ShellHeadItem(); };

/**
 * Setter for the aggregated <code>header</code>.
 * @param {sap.ui.core.Control} oHeader The Control which should be rendered within the Shell header or <code>null</code> to render the default Shell header.
 * @return {sap.ui.unified.Shell} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.setHeader = function(oHeader) { return new sap.ui.unified.Shell(); };

/**
 * Sets a new value for property <code>icon</code>.
 * 
 * The application icon. If a custom header is set this property has no effect.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {sap.ui.core.URI} sIcon New value for property <code>icon</code>
 * @returns {sap.ui.unified.Shell} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.setIcon = function(sIcon) { return new sap.ui.unified.Shell(); };

/**
 * Sets the aggregated <code>search</code>.
 * @param {sap.ui.core.Control} oSearch The search to set
 * @returns {sap.ui.unified.Shell} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.setSearch = function(oSearch) { return new sap.ui.unified.Shell(); };

/**
 * Sets a new value for property <code>searchVisible</code>.
 * 
 * If set to false, the search area (aggregation 'search') is hidden. If a custom header is set this property has no effect.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bSearchVisible New value for property <code>searchVisible</code>
 * @returns {sap.ui.unified.Shell} Reference to <code>this</code> in order to allow method chaining
 * @since 1.18
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.setSearchVisible = function(bSearchVisible) { return new sap.ui.unified.Shell(); };

/**
 * Sets a new value for property <code>showCurtain</code>.
 * 
 * Shows / Hides the curtain.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {boolean} bShowCurtain New value for property <code>showCurtain</code>
 * @returns {sap.ui.unified.Shell} Reference to <code>this</code> in order to allow method chaining
 * @deprecated Since version 1.16.3. 
 * Curtain is deprecated and replaced by ShellOverlay mechanism.
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.setShowCurtain = function(bShowCurtain) { return new sap.ui.unified.Shell(); };

/**
 * Sets a new value for property <code>showCurtainPane</code>.
 * 
 * Shows / Hides the side pane on the curtain.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {boolean} bShowCurtainPane New value for property <code>showCurtainPane</code>
 * @returns {sap.ui.unified.Shell} Reference to <code>this</code> in order to allow method chaining
 * @deprecated Since version 1.16.3. 
 * Curtain is deprecated and replaced by ShellOverlay mechanism.
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.setShowCurtainPane = function(bShowCurtainPane) { return new sap.ui.unified.Shell(); };

/**
 * Sets the aggregated <code>user</code>.
 * @param {sap.ui.unified.ShellHeadUserItem} oUser The user to set
 * @returns {sap.ui.unified.Shell} Reference to <code>this</code> in order to allow method chaining
 * @since 1.22.0
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.setUser = function(oUser) { return new sap.ui.unified.Shell(); };


// ---- sap.ui.unified.ShellHeadItem --------------------------------------------------------------------------

/**
 * Constructor for a new ShellHeadItem.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getStartsSection startsSection} : boolean (default: false)</li>
 * <li>{@link #getShowSeparator showSeparator} : boolean (default: true)</li>
 * <li>{@link #getSelected selected} : boolean (default: false)</li>
 * <li>{@link #getShowMarker showMarker} : boolean (default: false)</li>
 * <li>{@link #getIcon icon} : sap.ui.core.URI</li>
 * <li>{@link #getVisible visible} : boolean (default: true)</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:press press} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Header Action item of the Shell.
 * @extends sap.ui.core.Element
 * @version 1.32.7
 * @constructor
 * @public
 * @since 1.15.1
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.unified.ShellHeadItem = function(sId,mSettings) {};
/**
 * Event is fired when the user presses the item.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.unified.ShellHeadItem.prototype.press = function(oControlEvent) {  };

/**
 * Adds some ariaLabelledBy into the association named <code>ariaLabelledBy</code>.
 * @param {string | sap.ui.core.Control} vAriaLabelledBy the ariaLabelledBy to add; if empty, nothing is inserted
 * @returns {sap.ui.unified.ShellHeadItem} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.ShellHeadItem.prototype.addAriaLabelledBy = function(vAriaLabelledBy) { return new sap.ui.unified.ShellHeadItem(); };

/**
 * Attaches event handler <code>fnFunction</code> to the 'press' event of this <code>sap.ui.unified.ShellHeadItem</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise it will be bound to this <code>sap.ui.unified.ShellHeadItem</code> itself.
 * 
 * Event is fired when the user presses the item.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to be called when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.unified.ShellHeadItem</code> itself.
 * @returns {sap.ui.unified.ShellHeadItem} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.ShellHeadItem.prototype.attachPress = function(oData,fnFunction,oListener) { return new sap.ui.unified.ShellHeadItem(); };

/**
 * Detaches event handler <code>fnFunction</code> from the 'press' event of this <code>sap.ui.unified.ShellHeadItem</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @returns {sap.ui.unified.ShellHeadItem} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.ShellHeadItem.prototype.detachPress = function(fnFunction,oListener) { return new sap.ui.unified.ShellHeadItem(); };

/**
 * Creates a new subclass of class sap.ui.unified.ShellHeadItem with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object. If not given, it defaults to <code>sap.ui.core.ElementMetadata</code>.
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.unified.ShellHeadItem.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event press to attached listeners.
 * @param {Map} [mArguments] The arguments to pass along with the event.
 * @returns {sap.ui.unified.ShellHeadItem} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.unified.ShellHeadItem.prototype.firePress = function(mArguments) { return new sap.ui.unified.ShellHeadItem(); };

/**
 * Returns array of IDs of the elements which are the current targets of the <code>ariaLabelledBy</code> association.
 * 
 * Association to controls / ids which label this control (see WAI-ARIA attribute aria-labelledby).
 * @returns {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.ui.unified.ShellHeadItem.prototype.getAriaLabelledBy = function() { return new Array(); };

/**
 * Gets current value of property <code>icon</code>.
 * 
 * The icon of the item, either defined in the sap.ui.core.IconPool or an URI to a custom image. An icon must be set.
 * @returns {sap.ui.core.URI} Value of property <code>icon</code>
 * @public
 * 
 */
sap.ui.unified.ShellHeadItem.prototype.getIcon = function() { return new sap.ui.core.URI(); };

/**
 * Returns a metadata object for class sap.ui.unified.ShellHeadItem.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.unified.ShellHeadItem.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property <code>selected</code>.
 * 
 * If set to true, the item gets a special design.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>selected</code>
 * @public
 * 
 */
sap.ui.unified.ShellHeadItem.prototype.getSelected = function() { return false; };

/**
 * Gets current value of property <code>showMarker</code>.
 * 
 * If set to true, a theme dependent marker is shown on the item.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>showMarker</code>
 * @deprecated Since version 1.18. 
 * Markers should not be used anymore.
 * @public
 * 
 */
sap.ui.unified.ShellHeadItem.prototype.getShowMarker = function() { return false; };

/**
 * Gets current value of property <code>showSeparator</code>.
 * 
 * If set to true, a separator is displayed after the item.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>showSeparator</code>
 * @since 1.22.5
 * @public
 * 
 */
sap.ui.unified.ShellHeadItem.prototype.getShowSeparator = function() { return false; };

/**
 * Gets current value of property <code>startsSection</code>.
 * 
 * If set to true, a divider is displayed before the item.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>startsSection</code>
 * @deprecated Since version 1.18. 
 * Dividers are not supported anymore.
 * @public
 * 
 */
sap.ui.unified.ShellHeadItem.prototype.getStartsSection = function() { return false; };

/**
 * Gets current value of property <code>visible</code>.
 * 
 * Invisible items are not shown on the UI.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>visible</code>
 * @since 1.18
 * @public
 * 
 */
sap.ui.unified.ShellHeadItem.prototype.getVisible = function() { return false; };

/**
 * Removes all the controls in the association named <code>ariaLabelledBy</code>.
 * @returns {sap.ui.core.Control[]} An array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.unified.ShellHeadItem.prototype.removeAllAriaLabelledBy = function() { return new Array(); };

/**
 * Removes an ariaLabelledBy from the association named <code>ariaLabelledBy</code>.
 * @param {int | string | sap.ui.core.Control} vAriaLabelledBy The ariaLabelledByto be removed or its index or ID
 * @returns {sap.ui.core.Control} the removed ariaLabelledBy or <code>null</code>
 * @public
 * 
 */
sap.ui.unified.ShellHeadItem.prototype.removeAriaLabelledBy = function(vAriaLabelledBy) { return new sap.ui.core.Control(); };

/**
 * Sets a new value for property <code>icon</code>.
 * 
 * The icon of the item, either defined in the sap.ui.core.IconPool or an URI to a custom image. An icon must be set.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {sap.ui.core.URI} sIcon New value for property <code>icon</code>
 * @returns {sap.ui.unified.ShellHeadItem} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.ShellHeadItem.prototype.setIcon = function(sIcon) { return new sap.ui.unified.ShellHeadItem(); };

/**
 * Sets a new value for property <code>selected</code>.
 * 
 * If set to true, the item gets a special design.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bSelected New value for property <code>selected</code>
 * @returns {sap.ui.unified.ShellHeadItem} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.ShellHeadItem.prototype.setSelected = function(bSelected) { return new sap.ui.unified.ShellHeadItem(); };

/**
 * Sets a new value for property <code>showMarker</code>.
 * 
 * If set to true, a theme dependent marker is shown on the item.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bShowMarker New value for property <code>showMarker</code>
 * @returns {sap.ui.unified.ShellHeadItem} Reference to <code>this</code> in order to allow method chaining
 * @deprecated Since version 1.18. 
 * Markers should not be used anymore.
 * @public
 * 
 */
sap.ui.unified.ShellHeadItem.prototype.setShowMarker = function(bShowMarker) { return new sap.ui.unified.ShellHeadItem(); };

/**
 * Sets a new value for property <code>showSeparator</code>.
 * 
 * If set to true, a separator is displayed after the item.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bShowSeparator New value for property <code>showSeparator</code>
 * @returns {sap.ui.unified.ShellHeadItem} Reference to <code>this</code> in order to allow method chaining
 * @since 1.22.5
 * @public
 * 
 */
sap.ui.unified.ShellHeadItem.prototype.setShowSeparator = function(bShowSeparator) { return new sap.ui.unified.ShellHeadItem(); };

/**
 * Sets a new value for property <code>startsSection</code>.
 * 
 * If set to true, a divider is displayed before the item.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bStartsSection New value for property <code>startsSection</code>
 * @returns {sap.ui.unified.ShellHeadItem} Reference to <code>this</code> in order to allow method chaining
 * @deprecated Since version 1.18. 
 * Dividers are not supported anymore.
 * @public
 * 
 */
sap.ui.unified.ShellHeadItem.prototype.setStartsSection = function(bStartsSection) { return new sap.ui.unified.ShellHeadItem(); };

/**
 * Sets a new value for property <code>visible</code>.
 * 
 * Invisible items are not shown on the UI.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bVisible New value for property <code>visible</code>
 * @returns {sap.ui.unified.ShellHeadItem} Reference to <code>this</code> in order to allow method chaining
 * @since 1.18
 * @public
 * 
 */
sap.ui.unified.ShellHeadItem.prototype.setVisible = function(bVisible) { return new sap.ui.unified.ShellHeadItem(); };


// ---- sap.ui.unified.ShellHeadUserItem --------------------------------------------------------------------------

/**
 * Constructor for a new ShellHeadUserItem.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getUsername username} : string (default: )</li>
 * <li>{@link #getShowPopupIndicator showPopupIndicator} : boolean (default: true)</li>
 * <li>{@link #getImage image} : sap.ui.core.URI</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:press press} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * User Header Action Item of the Shell.
 * @extends sap.ui.core.Element
 * @version 1.32.7
 * @constructor
 * @public
 * @since 1.22.0
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.unified.ShellHeadUserItem = function(sId,mSettings) {};
/**
 * Event is fired when the user presses the button.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.unified.ShellHeadUserItem.prototype.press = function(oControlEvent) {  };

/**
 * Adds some ariaLabelledBy into the association named <code>ariaLabelledBy</code>.
 * @param {string | sap.ui.core.Control} vAriaLabelledBy the ariaLabelledBy to add; if empty, nothing is inserted
 * @returns {sap.ui.unified.ShellHeadUserItem} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.ShellHeadUserItem.prototype.addAriaLabelledBy = function(vAriaLabelledBy) { return new sap.ui.unified.ShellHeadUserItem(); };

/**
 * Attaches event handler <code>fnFunction</code> to the 'press' event of this <code>sap.ui.unified.ShellHeadUserItem</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise it will be bound to this <code>sap.ui.unified.ShellHeadUserItem</code> itself.
 * 
 * Event is fired when the user presses the button.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to be called when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.unified.ShellHeadUserItem</code> itself.
 * @returns {sap.ui.unified.ShellHeadUserItem} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.ShellHeadUserItem.prototype.attachPress = function(oData,fnFunction,oListener) { return new sap.ui.unified.ShellHeadUserItem(); };

/**
 * Detaches event handler <code>fnFunction</code> from the 'press' event of this <code>sap.ui.unified.ShellHeadUserItem</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @returns {sap.ui.unified.ShellHeadUserItem} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.ShellHeadUserItem.prototype.detachPress = function(fnFunction,oListener) { return new sap.ui.unified.ShellHeadUserItem(); };

/**
 * Creates a new subclass of class sap.ui.unified.ShellHeadUserItem with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object. If not given, it defaults to <code>sap.ui.core.ElementMetadata</code>.
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.unified.ShellHeadUserItem.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event press to attached listeners.
 * @param {Map} [mArguments] The arguments to pass along with the event.
 * @returns {sap.ui.unified.ShellHeadUserItem} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.unified.ShellHeadUserItem.prototype.firePress = function(mArguments) { return new sap.ui.unified.ShellHeadUserItem(); };

/**
 * Returns array of IDs of the elements which are the current targets of the <code>ariaLabelledBy</code> association.
 * 
 * Association to controls / ids which label this control (see WAI-ARIA attribute aria-labelledby).
 * @returns {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.ui.unified.ShellHeadUserItem.prototype.getAriaLabelledBy = function() { return new Array(); };

/**
 * Gets current value of property <code>image</code>.
 * 
 * An image of the user, normally an URI to a image but also an icon from the sap.ui.core.IconPool is possible.
 * @returns {sap.ui.core.URI} Value of property <code>image</code>
 * @public
 * 
 */
sap.ui.unified.ShellHeadUserItem.prototype.getImage = function() { return new sap.ui.core.URI(); };

/**
 * Returns a metadata object for class sap.ui.unified.ShellHeadUserItem.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.unified.ShellHeadUserItem.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property <code>showPopupIndicator</code>.
 * 
 * The user item is intended to be used for user settings. Normally these settings are done via a Menu or Dialog.
 * If this property is set to true an indicator for such a popup mechanismn is shown in the item.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>showPopupIndicator</code>
 * @since 1.27.0
 * @public
 * 
 */
sap.ui.unified.ShellHeadUserItem.prototype.getShowPopupIndicator = function() { return false; };

/**
 * Gets current value of property <code>username</code>.
 * 
 * The name of the user.
 * 
 * Default value is <code></code>.
 * @returns {string} Value of property <code>username</code>
 * @public
 * 
 */
sap.ui.unified.ShellHeadUserItem.prototype.getUsername = function() { return ""; };

/**
 * Removes all the controls in the association named <code>ariaLabelledBy</code>.
 * @returns {sap.ui.core.Control[]} An array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.unified.ShellHeadUserItem.prototype.removeAllAriaLabelledBy = function() { return new Array(); };

/**
 * Removes an ariaLabelledBy from the association named <code>ariaLabelledBy</code>.
 * @param {int | string | sap.ui.core.Control} vAriaLabelledBy The ariaLabelledByto be removed or its index or ID
 * @returns {sap.ui.core.Control} the removed ariaLabelledBy or <code>null</code>
 * @public
 * 
 */
sap.ui.unified.ShellHeadUserItem.prototype.removeAriaLabelledBy = function(vAriaLabelledBy) { return new sap.ui.core.Control(); };

/**
 * Sets a new value for property <code>image</code>.
 * 
 * An image of the user, normally an URI to a image but also an icon from the sap.ui.core.IconPool is possible.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {sap.ui.core.URI} sImage New value for property <code>image</code>
 * @returns {sap.ui.unified.ShellHeadUserItem} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.ShellHeadUserItem.prototype.setImage = function(sImage) { return new sap.ui.unified.ShellHeadUserItem(); };

/**
 * Sets a new value for property <code>showPopupIndicator</code>.
 * 
 * The user item is intended to be used for user settings. Normally these settings are done via a Menu or Dialog.
 * If this property is set to true an indicator for such a popup mechanismn is shown in the item.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bShowPopupIndicator New value for property <code>showPopupIndicator</code>
 * @returns {sap.ui.unified.ShellHeadUserItem} Reference to <code>this</code> in order to allow method chaining
 * @since 1.27.0
 * @public
 * 
 */
sap.ui.unified.ShellHeadUserItem.prototype.setShowPopupIndicator = function(bShowPopupIndicator) { return new sap.ui.unified.ShellHeadUserItem(); };

/**
 * Sets a new value for property <code>username</code>.
 * 
 * The name of the user.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code></code>.
 * @param {string} sUsername New value for property <code>username</code>
 * @returns {sap.ui.unified.ShellHeadUserItem} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.ShellHeadUserItem.prototype.setUsername = function(sUsername) { return new sap.ui.unified.ShellHeadUserItem(); };


// ---- sap.ui.unified.ShellLayout --------------------------------------------------------------------------

/**
 * Constructor for a new ShellLayout.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getShowPane showPane} : boolean (default: false)</li>
 * <li>{@link #getHeaderHiding headerHiding} : boolean (default: false)</li>
 * <li>{@link #getHeaderVisible headerVisible} : boolean (default: true)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getContent content} : sap.ui.core.Control[] (default)</li>
 * <li>{@link #getPaneContent paneContent} : sap.ui.core.Control[]</li>
 * <li>{@link #getHeader header} : sap.ui.core.Control</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * The shell layout is the base for the shell control which is meant as root control (full-screen) of an application.
 * It was build as root control of the Fiori Launchpad application and provides the basic capabilities
 * for this purpose. Do not use this control within applications which run inside the Fiori Lauchpad and
 * do not use it for other scenarios than the root control usecase.
 * @extends sap.ui.core.Control
 * @version 1.32.7
 * @constructor
 * @public
 * @since 1.25.0
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.unified.ShellLayout = function(sId,mSettings) {};
/**
 * Adds some content into the aggregation named <code>content</code>.
 * @param {sap.ui.core.Control}
 *            oContent the content to add; to add; if empty, nothing is inserted
 * @returns {sap.ui.unified.ShellLayout} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.ShellLayout.prototype.addContent = function(oContent) { return new sap.ui.unified.ShellLayout(); };

/**
 * Adds some paneContent into the aggregation named <code>paneContent</code>.
 * @param {sap.ui.core.Control}
 *            oPaneContent the paneContent to add; to add; if empty, nothing is inserted
 * @returns {sap.ui.unified.ShellLayout} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.ShellLayout.prototype.addPaneContent = function(oPaneContent) { return new sap.ui.unified.ShellLayout(); };

/**
 * Destroys all the content in the aggregation
 * named <code>content</code>.
 * @returns {sap.ui.unified.ShellLayout} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.ShellLayout.prototype.destroyContent = function() { return new sap.ui.unified.ShellLayout(); };

/**
 * Destroys the header in the aggregation
 * named <code>header</code>.
 * @returns {sap.ui.unified.ShellLayout} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.ShellLayout.prototype.destroyHeader = function() { return new sap.ui.unified.ShellLayout(); };

/**
 * Destroys all the paneContent in the aggregation
 * named <code>paneContent</code>.
 * @returns {sap.ui.unified.ShellLayout} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.ShellLayout.prototype.destroyPaneContent = function() { return new sap.ui.unified.ShellLayout(); };

/**
 * Creates a new subclass of class sap.ui.unified.ShellLayout with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object. If not given, it defaults to <code>sap.ui.core.ElementMetadata</code>.
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.unified.ShellLayout.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets content of aggregation <code>content</code>.
 * 
 * The content to appear in the main canvas.
 * @returns {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.ui.unified.ShellLayout.prototype.getContent = function() { return new Array(); };

/**
 * Gets content of aggregation <code>header</code>.
 * 
 * The control to appear in the header area.
 * @returns {sap.ui.core.Control}
 * @public
 * 
 */
sap.ui.unified.ShellLayout.prototype.getHeader = function() { return new sap.ui.core.Control(); };

/**
 * Gets current value of property <code>headerHiding</code>.
 * 
 * Whether the header can be hidden (manually or automatically). This feature is only available when touch events are supported.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>headerHiding</code>
 * @public
 * 
 */
sap.ui.unified.ShellLayout.prototype.getHeaderHiding = function() { return false; };

/**
 * Gets current value of property <code>headerVisible</code>.
 * 
 * If set to false, no header (and no items, search, ...) is shown.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>headerVisible</code>
 * @public
 * 
 */
sap.ui.unified.ShellLayout.prototype.getHeaderVisible = function() { return false; };

/**
 * Returns a metadata object for class sap.ui.unified.ShellLayout.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.unified.ShellLayout.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets content of aggregation <code>paneContent</code>.
 * 
 * The content to appear in the pane area.
 * @returns {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.ui.unified.ShellLayout.prototype.getPaneContent = function() { return new Array(); };

/**
 * Gets current value of property <code>showPane</code>.
 * 
 * Shows / Hides the side pane.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>showPane</code>
 * @public
 * 
 */
sap.ui.unified.ShellLayout.prototype.getShowPane = function() { return false; };

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>content</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *           oContent The content whose index is looked for.
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.unified.ShellLayout.prototype.indexOfContent = function(oContent) { return 0; };

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>paneContent</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *           oPaneContent The paneContent whose index is looked for.
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.unified.ShellLayout.prototype.indexOfPaneContent = function(oPaneContent) { return 0; };

/**
 * Inserts a content into the aggregation named <code>content</code>.
 * @param {sap.ui.core.Control}
 *            oContent the content to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the content should be inserted at; for
 *              a negative value of <code>iIndex</code>, the content is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the content is inserted at
 *              the last position
 * @returns {sap.ui.unified.ShellLayout} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.ShellLayout.prototype.insertContent = function(oContent,iIndex) { return new sap.ui.unified.ShellLayout(); };

/**
 * Inserts a paneContent into the aggregation named <code>paneContent</code>.
 * @param {sap.ui.core.Control}
 *            oPaneContent the paneContent to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the paneContent should be inserted at; for
 *              a negative value of <code>iIndex</code>, the paneContent is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the paneContent is inserted at
 *              the last position
 * @returns {sap.ui.unified.ShellLayout} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.ShellLayout.prototype.insertPaneContent = function(oPaneContent,iIndex) { return new sap.ui.unified.ShellLayout(); };

/**
 * Removes all the controls in the aggregation named <code>content</code>.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.core.Control[]} An array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.unified.ShellLayout.prototype.removeAllContent = function() { return new Array(); };

/**
 * Removes all the controls in the aggregation named <code>paneContent</code>.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.core.Control[]} An array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.unified.ShellLayout.prototype.removeAllPaneContent = function() { return new Array(); };

/**
 * Removes a content from the aggregation named <code>content</code>.
 * @param {int | string | sap.ui.core.Control} vContent The contentto remove or its index or id
 * @returns {sap.ui.core.Control} The removed content or <code>null</code>
 * @public
 * 
 */
sap.ui.unified.ShellLayout.prototype.removeContent = function(vContent) { return new sap.ui.core.Control(); };

/**
 * Removes a paneContent from the aggregation named <code>paneContent</code>.
 * @param {int | string | sap.ui.core.Control} vPaneContent The paneContentto remove or its index or id
 * @returns {sap.ui.core.Control} The removed paneContent or <code>null</code>
 * @public
 * 
 */
sap.ui.unified.ShellLayout.prototype.removePaneContent = function(vPaneContent) { return new sap.ui.core.Control(); };

/**
 * Sets the aggregated <code>header</code>.
 * @param {sap.ui.core.Control} oHeader The header to set
 * @returns {sap.ui.unified.ShellLayout} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.ShellLayout.prototype.setHeader = function(oHeader) { return new sap.ui.unified.ShellLayout(); };

/**
 * Sets a new value for property <code>headerHiding</code>.
 * 
 * Whether the header can be hidden (manually or automatically). This feature is only available when touch events are supported.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bHeaderHiding New value for property <code>headerHiding</code>
 * @returns {sap.ui.unified.ShellLayout} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.ShellLayout.prototype.setHeaderHiding = function(bHeaderHiding) { return new sap.ui.unified.ShellLayout(); };

/**
 * Sets a new value for property <code>headerVisible</code>.
 * 
 * If set to false, no header (and no items, search, ...) is shown.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bHeaderVisible New value for property <code>headerVisible</code>
 * @returns {sap.ui.unified.ShellLayout} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.ShellLayout.prototype.setHeaderVisible = function(bHeaderVisible) { return new sap.ui.unified.ShellLayout(); };

/**
 * Sets a new value for property <code>showPane</code>.
 * 
 * Shows / Hides the side pane.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bShowPane New value for property <code>showPane</code>
 * @returns {sap.ui.unified.ShellLayout} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.ShellLayout.prototype.setShowPane = function(bShowPane) { return new sap.ui.unified.ShellLayout(); };


// ---- sap.ui.unified.ShellOverlay --------------------------------------------------------------------------

/**
 * Constructor for a new ShellOverlay.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * The supported settings are:
 * <ul>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getContent content} : sap.ui.core.Control[] (default)</li>
 * <li>{@link #getSearch search} : sap.ui.core.Control</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:closed closed} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * ShellOverlay to be opened in front of a sap.ui.unified.Shell
 * @extends sap.ui.core.Control
 * @version 1.32.7
 * @constructor
 * @public
 * @since 1.16.3
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.unified.ShellOverlay = function(sId,mSettings) {};
/**
 * Fired when the overlay was closed.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.unified.ShellOverlay.prototype.closed = function(oControlEvent) {  };

/**
 * Adds some ariaLabelledBy into the association named <code>ariaLabelledBy</code>.
 * @param {string | sap.ui.core.Control} vAriaLabelledBy the ariaLabelledBy to add; if empty, nothing is inserted
 * @returns {sap.ui.unified.ShellOverlay} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.ShellOverlay.prototype.addAriaLabelledBy = function(vAriaLabelledBy) { return new sap.ui.unified.ShellOverlay(); };

/**
 * Adds some content into the aggregation named <code>content</code>.
 * @param {sap.ui.core.Control}
 *            oContent the content to add; to add; if empty, nothing is inserted
 * @returns {sap.ui.unified.ShellOverlay} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.ShellOverlay.prototype.addContent = function(oContent) { return new sap.ui.unified.ShellOverlay(); };

/**
 * Attaches event handler <code>fnFunction</code> to the 'closed' event of this <code>sap.ui.unified.ShellOverlay</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise it will be bound to this <code>sap.ui.unified.ShellOverlay</code> itself.
 * 
 * Fired when the overlay was closed.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to be called when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.unified.ShellOverlay</code> itself.
 * @returns {sap.ui.unified.ShellOverlay} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.ShellOverlay.prototype.attachClosed = function(oData,fnFunction,oListener) { return new sap.ui.unified.ShellOverlay(); };

/**
 * Closes the ShellOverlay.
 * @public
 * 
 */
sap.ui.unified.ShellOverlay.prototype.close = function() {  };

/**
 * Destroys all the content in the aggregation
 * named <code>content</code>.
 * @returns {sap.ui.unified.ShellOverlay} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.ShellOverlay.prototype.destroyContent = function() { return new sap.ui.unified.ShellOverlay(); };

/**
 * Destroys the search in the aggregation
 * named <code>search</code>.
 * @returns {sap.ui.unified.ShellOverlay} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.ShellOverlay.prototype.destroySearch = function() { return new sap.ui.unified.ShellOverlay(); };

/**
 * Detaches event handler <code>fnFunction</code> from the 'closed' event of this <code>sap.ui.unified.ShellOverlay</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @returns {sap.ui.unified.ShellOverlay} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.ShellOverlay.prototype.detachClosed = function(fnFunction,oListener) { return new sap.ui.unified.ShellOverlay(); };

/**
 * Creates a new subclass of class sap.ui.unified.ShellOverlay with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object. If not given, it defaults to <code>sap.ui.core.ElementMetadata</code>.
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.unified.ShellOverlay.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event closed to attached listeners.
 * @param {Map} [mArguments] The arguments to pass along with the event.
 * @returns {sap.ui.unified.ShellOverlay} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.unified.ShellOverlay.prototype.fireClosed = function(mArguments) { return new sap.ui.unified.ShellOverlay(); };

/**
 * Returns array of IDs of the elements which are the current targets of the <code>ariaLabelledBy</code> association.
 * 
 * Association to controls / ids which label this control (see WAI-ARIA attribute aria-labelledby).
 * @returns {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.ui.unified.ShellOverlay.prototype.getAriaLabelledBy = function() { return new Array(); };

/**
 * Gets content of aggregation <code>content</code>.
 * 
 * The content to appear in the overlay.
 * @returns {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.ui.unified.ShellOverlay.prototype.getContent = function() { return new Array(); };

/**
 * Returns a metadata object for class sap.ui.unified.ShellOverlay.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.unified.ShellOverlay.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets content of aggregation <code>search</code>.
 * 
 * Experimental (This aggregation might change in future!): The search control which should be displayed in the overlay header.
 * @returns {sap.ui.core.Control}
 * @public
 * 
 */
sap.ui.unified.ShellOverlay.prototype.getSearch = function() { return new sap.ui.core.Control(); };

/**
 * ID of the element which is the current target of the <code>shell</code> association, or <code>null</code>.
 * 
 * Reference to the sap.ui.unified.Shell or sap.ui.unified.ShellLayout control.
 * @returns {sap.ui.unified.ShellLayout}
 * @public
 * 
 */
sap.ui.unified.ShellOverlay.prototype.getShell = function() { return new sap.ui.unified.ShellLayout(); };

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>content</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *           oContent The content whose index is looked for.
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.unified.ShellOverlay.prototype.indexOfContent = function(oContent) { return 0; };

/**
 * Inserts a content into the aggregation named <code>content</code>.
 * @param {sap.ui.core.Control}
 *            oContent the content to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the content should be inserted at; for
 *              a negative value of <code>iIndex</code>, the content is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the content is inserted at
 *              the last position
 * @returns {sap.ui.unified.ShellOverlay} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.ShellOverlay.prototype.insertContent = function(oContent,iIndex) { return new sap.ui.unified.ShellOverlay(); };

/**
 * Opens the ShellOverlay.
 * @public
 * 
 */
sap.ui.unified.ShellOverlay.prototype.open = function() {  };

/**
 * Removes all the controls in the association named <code>ariaLabelledBy</code>.
 * @returns {sap.ui.core.Control[]} An array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.unified.ShellOverlay.prototype.removeAllAriaLabelledBy = function() { return new Array(); };

/**
 * Removes all the controls in the aggregation named <code>content</code>.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.core.Control[]} An array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.unified.ShellOverlay.prototype.removeAllContent = function() { return new Array(); };

/**
 * Removes an ariaLabelledBy from the association named <code>ariaLabelledBy</code>.
 * @param {int | string | sap.ui.core.Control} vAriaLabelledBy The ariaLabelledByto be removed or its index or ID
 * @returns {sap.ui.core.Control} the removed ariaLabelledBy or <code>null</code>
 * @public
 * 
 */
sap.ui.unified.ShellOverlay.prototype.removeAriaLabelledBy = function(vAriaLabelledBy) { return new sap.ui.core.Control(); };

/**
 * Removes a content from the aggregation named <code>content</code>.
 * @param {int | string | sap.ui.core.Control} vContent The contentto remove or its index or id
 * @returns {sap.ui.core.Control} The removed content or <code>null</code>
 * @public
 * 
 */
sap.ui.unified.ShellOverlay.prototype.removeContent = function(vContent) { return new sap.ui.core.Control(); };

/**
 * Sets the aggregated <code>search</code>.
 * @param {sap.ui.core.Control} oSearch The search to set
 * @returns {sap.ui.unified.ShellOverlay} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.ShellOverlay.prototype.setSearch = function(oSearch) { return new sap.ui.unified.ShellOverlay(); };

/**
 * Sets the associated <code>shell</code>.
 * @param {sap.ui.unified.ShellLayout} oShell Id of an element which becomes the new target of this shell association. Alternatively, an element instance may be given.
 * @returns {sap.ui.unified.ShellOverlay} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.ShellOverlay.prototype.setShell = function(oShell) { return new sap.ui.unified.ShellOverlay(); };


// ---- sap.ui.unified.SplitContainer --------------------------------------------------------------------------

/**
 * Constructor for a new SplitContainer.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getShowSecondaryContent showSecondaryContent} : boolean</li>
 * <li>{@link #getSecondaryContentSize secondaryContentSize} : sap.ui.core.CSSSize (default: 250px)</li>
 * <li>{@link #getSecondaryContentWidth secondaryContentWidth} : sap.ui.core.CSSSize (default: 250px)</li>
 * <li>{@link #getOrientation orientation} : sap.ui.core.Orientation (default: Horizontal)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getContent content} : sap.ui.core.Control[] (default)</li>
 * <li>{@link #getSecondaryContent secondaryContent} : sap.ui.core.Control[]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Provides a main content and a secondary content area
 * @extends sap.ui.core.Control
 * @version 1.32.7
 * @constructor
 * @public
 * @since 1.15.0
 * @experimental Since version 1.15.0. 
 * API is not yet finished and might change completely
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.unified.SplitContainer = function(sId,mSettings) {};
/**
 * Adds some content into the aggregation named <code>content</code>.
 * @param {sap.ui.core.Control}
 *            oContent the content to add; to add; if empty, nothing is inserted
 * @returns {sap.ui.unified.SplitContainer} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.SplitContainer.prototype.addContent = function(oContent) { return new sap.ui.unified.SplitContainer(); };

/**
 * Adds some secondaryContent into the aggregation named <code>secondaryContent</code>.
 * @param {sap.ui.core.Control}
 *            oSecondaryContent the secondaryContent to add; to add; if empty, nothing is inserted
 * @returns {sap.ui.unified.SplitContainer} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.SplitContainer.prototype.addSecondaryContent = function(oSecondaryContent) { return new sap.ui.unified.SplitContainer(); };

/**
 * Destroys all the content in the aggregation
 * named <code>content</code>.
 * @returns {sap.ui.unified.SplitContainer} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.SplitContainer.prototype.destroyContent = function() { return new sap.ui.unified.SplitContainer(); };

/**
 * Destroys all the secondaryContent in the aggregation
 * named <code>secondaryContent</code>.
 * @returns {sap.ui.unified.SplitContainer} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.SplitContainer.prototype.destroySecondaryContent = function() { return new sap.ui.unified.SplitContainer(); };

/**
 * Creates a new subclass of class sap.ui.unified.SplitContainer with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object. If not given, it defaults to <code>sap.ui.core.ElementMetadata</code>.
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.unified.SplitContainer.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets content of aggregation <code>content</code>.
 * 
 * The content to appear in the main area.
 * @returns {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.ui.unified.SplitContainer.prototype.getContent = function() { return new Array(); };

/**
 * Returns a metadata object for class sap.ui.unified.SplitContainer.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.unified.SplitContainer.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property <code>orientation</code>.
 * 
 * Whether to show the secondary content on the left ("Horizontal", default) or on the top ("Vertical").
 * 
 * Default value is <code>Horizontal</code>.
 * @returns {sap.ui.core.Orientation} Value of property <code>orientation</code>
 * @since 1.22.0
 * @public
 * 
 */
sap.ui.unified.SplitContainer.prototype.getOrientation = function() { return new sap.ui.core.Orientation(); };

/**
 * Gets content of aggregation <code>secondaryContent</code>.
 * 
 * The content to appear in the secondary area.
 * @returns {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.ui.unified.SplitContainer.prototype.getSecondaryContent = function() { return new Array(); };

/**
 * Gets current value of property <code>secondaryContentSize</code>.
 * 
 * The width if the secondary content. The height is always 100%.
 * 
 * Default value is <code>250px</code>.
 * @returns {sap.ui.core.CSSSize} Value of property <code>secondaryContentSize</code>
 * @public
 * 
 */
sap.ui.unified.SplitContainer.prototype.getSecondaryContentSize = function() { return new sap.ui.core.CSSSize(); };

/**
 * Gets current value of property <code>secondaryContentWidth</code>.
 * 
 * Do not use. Use secondaryContentSize instead.
 * 
 * Default value is <code>250px</code>.
 * @returns {sap.ui.core.CSSSize} Value of property <code>secondaryContentWidth</code>
 * @deprecated Since version 1.22. 
 * 
 * Only available for backwards compatibility.
 * @public
 * 
 */
sap.ui.unified.SplitContainer.prototype.getSecondaryContentWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * Gets current value of property <code>showSecondaryContent</code>.
 * 
 * Shows / Hides the secondary area.
 * @returns {boolean} Value of property <code>showSecondaryContent</code>
 * @public
 * 
 */
sap.ui.unified.SplitContainer.prototype.getShowSecondaryContent = function() { return false; };

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>content</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *           oContent The content whose index is looked for.
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.unified.SplitContainer.prototype.indexOfContent = function(oContent) { return 0; };

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>secondaryContent</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *           oSecondaryContent The secondaryContent whose index is looked for.
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.unified.SplitContainer.prototype.indexOfSecondaryContent = function(oSecondaryContent) { return 0; };

/**
 * Inserts a content into the aggregation named <code>content</code>.
 * @param {sap.ui.core.Control}
 *            oContent the content to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the content should be inserted at; for
 *              a negative value of <code>iIndex</code>, the content is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the content is inserted at
 *              the last position
 * @returns {sap.ui.unified.SplitContainer} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.SplitContainer.prototype.insertContent = function(oContent,iIndex) { return new sap.ui.unified.SplitContainer(); };

/**
 * Inserts a secondaryContent into the aggregation named <code>secondaryContent</code>.
 * @param {sap.ui.core.Control}
 *            oSecondaryContent the secondaryContent to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the secondaryContent should be inserted at; for
 *              a negative value of <code>iIndex</code>, the secondaryContent is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the secondaryContent is inserted at
 *              the last position
 * @returns {sap.ui.unified.SplitContainer} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.SplitContainer.prototype.insertSecondaryContent = function(oSecondaryContent,iIndex) { return new sap.ui.unified.SplitContainer(); };

/**
 * Removes all the controls in the aggregation named <code>content</code>.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.core.Control[]} An array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.unified.SplitContainer.prototype.removeAllContent = function() { return new Array(); };

/**
 * Removes all the controls in the aggregation named <code>secondaryContent</code>.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.core.Control[]} An array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.unified.SplitContainer.prototype.removeAllSecondaryContent = function() { return new Array(); };

/**
 * Removes a content from the aggregation named <code>content</code>.
 * @param {int | string | sap.ui.core.Control} vContent The contentto remove or its index or id
 * @returns {sap.ui.core.Control} The removed content or <code>null</code>
 * @public
 * 
 */
sap.ui.unified.SplitContainer.prototype.removeContent = function(vContent) { return new sap.ui.core.Control(); };

/**
 * Removes a secondaryContent from the aggregation named <code>secondaryContent</code>.
 * @param {int | string | sap.ui.core.Control} vSecondaryContent The secondaryContentto remove or its index or id
 * @returns {sap.ui.core.Control} The removed secondaryContent or <code>null</code>
 * @public
 * 
 */
sap.ui.unified.SplitContainer.prototype.removeSecondaryContent = function(vSecondaryContent) { return new sap.ui.core.Control(); };

/**
 * Sets a new value for property <code>orientation</code>.
 * 
 * Whether to show the secondary content on the left ("Horizontal", default) or on the top ("Vertical").
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Horizontal</code>.
 * @param {sap.ui.core.Orientation} sOrientation New value for property <code>orientation</code>
 * @returns {sap.ui.unified.SplitContainer} Reference to <code>this</code> in order to allow method chaining
 * @since 1.22.0
 * @public
 * 
 */
sap.ui.unified.SplitContainer.prototype.setOrientation = function(sOrientation) { return new sap.ui.unified.SplitContainer(); };

/**
 * Sets a new value for property <code>secondaryContentSize</code>.
 * 
 * The width if the secondary content. The height is always 100%.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>250px</code>.
 * @param {sap.ui.core.CSSSize} sSecondaryContentSize New value for property <code>secondaryContentSize</code>
 * @returns {sap.ui.unified.SplitContainer} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.SplitContainer.prototype.setSecondaryContentSize = function(sSecondaryContentSize) { return new sap.ui.unified.SplitContainer(); };

/**
 * Sets a new value for property <code>secondaryContentWidth</code>.
 * 
 * Do not use. Use secondaryContentSize instead.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>250px</code>.
 * @param {sap.ui.core.CSSSize} sSecondaryContentWidth New value for property <code>secondaryContentWidth</code>
 * @returns {sap.ui.unified.SplitContainer} Reference to <code>this</code> in order to allow method chaining
 * @deprecated Since version 1.22. 
 * 
 * Only available for backwards compatibility.
 * @public
 * 
 */
sap.ui.unified.SplitContainer.prototype.setSecondaryContentWidth = function(sSecondaryContentWidth) { return new sap.ui.unified.SplitContainer(); };

/**
 * Sets a new value for property <code>showSecondaryContent</code>.
 * 
 * Shows / Hides the secondary area.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {boolean} bShowSecondaryContent New value for property <code>showSecondaryContent</code>
 * @returns {sap.ui.unified.SplitContainer} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.unified.SplitContainer.prototype.setShowSecondaryContent = function(bShowSecondaryContent) { return new sap.ui.unified.SplitContainer(); };

// ---- static fields of namespaces ---------------------------------------------------------------------

// ---- sap.ui.unified.CalendarDayType --------------------------------------------------------------------------

/**
 * None: No special type is used
 * @public
 * 
 */
sap.ui.unified.CalendarDayType.None = "";

/**
 * Type 01: The semantic meaning must be defined by the application. It can be shown in a legend.
 * @public
 * 
 */
sap.ui.unified.CalendarDayType.Type01 = "";

/**
 * Type 02: The semantic meaning must be defined by the application. It can be shown in a legend.
 * @public
 * 
 */
sap.ui.unified.CalendarDayType.Type02 = "";

/**
 * Type 03: The semantic meaning must be defined by the application. It can be shown in a legend.
 * @public
 * 
 */
sap.ui.unified.CalendarDayType.Type03 = "";

/**
 * Type 04: The semantic meaning must be defined by the application. It can be shown in a legend.
 * @public
 * 
 */
sap.ui.unified.CalendarDayType.Type04 = "";

/**
 * Type 05: The semantic meaning must be defined by the application. It can be shown in a legend.
 * @public
 * 
 */
sap.ui.unified.CalendarDayType.Type05 = "";

/**
 * Type 06: The semantic meaning must be defined by the application. It can be shown in a legend.
 * @public
 * 
 */
sap.ui.unified.CalendarDayType.Type06 = "";

/**
 * Type 07: The semantic meaning must be defined by the application. It can be shown in a legend.
 * @public
 * 
 */
sap.ui.unified.CalendarDayType.Type07 = "";

/**
 * Type 08: The semantic meaning must be defined by the application. It can be shown in a legend.
 * @public
 * 
 */
sap.ui.unified.CalendarDayType.Type08 = "";

/**
 * Type 09: The semantic meaning must be defined by the application. It can be shown in a legend.
 * @public
 * 
 */
sap.ui.unified.CalendarDayType.Type09 = "";

/**
 * Type 10: The semantic meaning must be defined by the application. It can be shown in a legend.
 * @public
 * 
 */
sap.ui.unified.CalendarDayType.Type10 = "";


// ---- sap.ui.unified.ContentSwitcherAnimation --------------------------------------------------------------------------

/**
 * Content is faded (opacity change).
 * @public
 * 
 */
sap.ui.unified.ContentSwitcherAnimation.Fade = "";

/**
 * No animation. Content is switched instantly.
 * @public
 * 
 */
sap.ui.unified.ContentSwitcherAnimation.None = "";

/**
 * The new content rotates in. (Just like one of those old newspaper-animations.)
 * @public
 * 
 */
sap.ui.unified.ContentSwitcherAnimation.Rotate = "";

/**
 * The new content slides in from the left while the old content slides out to the left at the same time.
 * @public
 * 
 */
sap.ui.unified.ContentSwitcherAnimation.SlideOver = "";

/**
 * The new slides in from the left (to the right).
 * @public
 * 
 */
sap.ui.unified.ContentSwitcherAnimation.SlideRight = "";

/**
 * The new content is "zoomed in" from the center and grows to fill the full content area.
 * @public
 * 
 */
sap.ui.unified.ContentSwitcherAnimation.ZoomIn = "";

/**
 * The old content is "zoomed out", i.e. shrinks to a point at the center of the content area.
 * @public
 * 
 */
sap.ui.unified.ContentSwitcherAnimation.ZoomOut = "";


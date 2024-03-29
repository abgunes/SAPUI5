
// ---- sap.uxap --------------------------------------------------------------------------


// ---- sap.uxap.AnchorBar --------------------------------------------------------------------------

/**
 * Constructor for a new AnchorBar.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getShowPopover showPopover} : boolean (default: true)</li>
 * <li>{@link #getUpperCase upperCase} : boolean (default: false)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.m.Toolbar#constructor sap.m.Toolbar}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Anchor bar is the navigation bar of an Object page. Its purpose is to provide links to all Sections and Subsections. Takes the form of a Select on phone.
 * @extends sap.m.Toolbar
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.uxap.AnchorBar = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.uxap.AnchorBar with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.m.Toolbar.extend}.
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object. If not given, it defaults to <code>sap.ui.core.ElementMetadata</code>.
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.uxap.AnchorBar.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.uxap.AnchorBar.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.uxap.AnchorBar.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * ID of the element which is the current target of the <code>selectedButton</code> association, or <code>null</code>.
 * 
 * The button that represents the Section being scrolled by the user.
 * @returns {sap.m.Button}
 * @public
 * 
 */
sap.uxap.AnchorBar.prototype.getSelectedButton = function() { return new sap.m.Button(); };

/**
 * Gets current value of property <code>showPopover</code>.
 * 
 * Determines whether to show a Popover with Subsection links when clicking on Section links in the Anchor bar.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>showPopover</code>
 * @public
 * 
 */
sap.uxap.AnchorBar.prototype.getShowPopover = function() { return false; };

/**
 * Gets current value of property <code>upperCase</code>.
 * 
 * Determines whether the Anchor bar items are displayed in upper case.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>upperCase</code>
 * @public
 * 
 */
sap.uxap.AnchorBar.prototype.getUpperCase = function() { return false; };

/**
 * Sets the associated <code>selectedButton</code>.
 * @param {sap.m.Button} oSelectedButton Id of an element which becomes the new target of this selectedButton association. Alternatively, an element instance may be given.
 * @returns {sap.uxap.AnchorBar} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.uxap.AnchorBar.prototype.setSelectedButton = function(oSelectedButton) { return new sap.uxap.AnchorBar(); };

/**
 * Sets a new value for property <code>showPopover</code>.
 * 
 * Determines whether to show a Popover with Subsection links when clicking on Section links in the Anchor bar.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bShowPopover New value for property <code>showPopover</code>
 * @returns {sap.uxap.AnchorBar} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.uxap.AnchorBar.prototype.setShowPopover = function(bShowPopover) { return new sap.uxap.AnchorBar(); };

/**
 * Sets a new value for property <code>upperCase</code>.
 * 
 * Determines whether the Anchor bar items are displayed in upper case.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bUpperCase New value for property <code>upperCase</code>
 * @returns {sap.uxap.AnchorBar} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.uxap.AnchorBar.prototype.setUpperCase = function(bUpperCase) { return new sap.uxap.AnchorBar(); };


// ---- sap.uxap.BlockBaseColumnLayout --------------------------------------------------------------------------


// ---- sap.uxap.BreadCrumbs --------------------------------------------------------------------------

/**
 * Constructor for a new BreadCrumbs.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getShowCurrentLocation showCurrentLocation} : boolean (default: true)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getLinks links} : sap.m.Link[]</li>
 * <li>{@link #getCurrentLocation currentLocation} : sap.m.Text</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * 
 * The BreadCrumbs control represents the navigation steps up to the current location in the application and allows
 * the user to quickly navigate to a previous location on the path that got him to the current location.
 * It has two main modes of operation. One is a trail of links followed by separators (when there's enough space
 * for the control to fit on one line), and the other is a dropdown list with the links (when the trail of links
 * wouldn't fit on one line).
 * @extends sap.ui.core.Control
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.uxap.BreadCrumbs = function(sId,mSettings) {};
/**
 * Adds some link into the aggregation named <code>links</code>.
 * @param {sap.m.Link}
 *            oLink the link to add; to add; if empty, nothing is inserted
 * @returns {sap.uxap.BreadCrumbs} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.uxap.BreadCrumbs.prototype.addLink = function(oLink) { return new sap.uxap.BreadCrumbs(); };

/**
 * Destroys the currentLocation in the aggregation
 * named <code>currentLocation</code>.
 * @returns {sap.uxap.BreadCrumbs} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.uxap.BreadCrumbs.prototype.destroyCurrentLocation = function() { return new sap.uxap.BreadCrumbs(); };

/**
 * Destroys all the links in the aggregation
 * named <code>links</code>.
 * @returns {sap.uxap.BreadCrumbs} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.uxap.BreadCrumbs.prototype.destroyLinks = function() { return new sap.uxap.BreadCrumbs(); };

/**
 * Creates a new subclass of class sap.uxap.BreadCrumbs with name <code>sClassName</code>
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
sap.uxap.BreadCrumbs.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets content of aggregation <code>currentLocation</code>.
 * 
 * The current/last element in the BreadCrumbs path.
 * @returns {sap.m.Text}
 * @public
 * 
 */
sap.uxap.BreadCrumbs.prototype.getCurrentLocation = function() { return new sap.m.Text(); };

/**
 * Gets content of aggregation <code>links</code>.
 * 
 * A list of all the active link elements in the BreadCrumbs control.
 * @returns {sap.m.Link[]}
 * @public
 * 
 */
sap.uxap.BreadCrumbs.prototype.getLinks = function() { return new Array(); };

/**
 * Returns a metadata object for class sap.uxap.BreadCrumbs.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.uxap.BreadCrumbs.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property <code>showCurrentLocation</code>.
 * 
 * Sets the visibility of the current/last element in the BreadCrumbs path.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>showCurrentLocation</code>
 * @public
 * 
 */
sap.uxap.BreadCrumbs.prototype.getShowCurrentLocation = function() { return false; };

/**
 * Checks for the provided <code>sap.m.Link</code> in the aggregation named <code>links</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.m.Link}
 *           oLink The link whose index is looked for.
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.uxap.BreadCrumbs.prototype.indexOfLink = function(oLink) { return 0; };

/**
 * Inserts a link into the aggregation named <code>links</code>.
 * @param {sap.m.Link}
 *            oLink the link to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the link should be inserted at; for
 *              a negative value of <code>iIndex</code>, the link is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the link is inserted at
 *              the last position
 * @returns {sap.uxap.BreadCrumbs} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.uxap.BreadCrumbs.prototype.insertLink = function(oLink,iIndex) { return new sap.uxap.BreadCrumbs(); };

/**
 * Removes all the controls in the aggregation named <code>links</code>.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.m.Link[]} An array of the removed elements (might be empty)
 * @public
 * 
 */
sap.uxap.BreadCrumbs.prototype.removeAllLinks = function() { return new Array(); };

/**
 * Removes a link from the aggregation named <code>links</code>.
 * @param {int | string | sap.m.Link} vLink The linkto remove or its index or id
 * @returns {sap.m.Link} The removed link or <code>null</code>
 * @public
 * 
 */
sap.uxap.BreadCrumbs.prototype.removeLink = function(vLink) { return new sap.m.Link(); };

/**
 * Sets the aggregated <code>currentLocation</code>.
 * @param {sap.m.Text} oCurrentLocation The currentLocation to set
 * @returns {sap.uxap.BreadCrumbs} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.uxap.BreadCrumbs.prototype.setCurrentLocation = function(oCurrentLocation) { return new sap.uxap.BreadCrumbs(); };

/**
 * Sets a new value for property <code>showCurrentLocation</code>.
 * 
 * Sets the visibility of the current/last element in the BreadCrumbs path.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bShowCurrentLocation New value for property <code>showCurrentLocation</code>
 * @returns {sap.uxap.BreadCrumbs} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.uxap.BreadCrumbs.prototype.setShowCurrentLocation = function(bShowCurrentLocation) { return new sap.uxap.BreadCrumbs(); };


// ---- sap.uxap.HierarchicalSelect --------------------------------------------------------------------------

/**
 * Constructor for a new HierarchicalSelect.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getUpperCase upperCase} : boolean (default: false)</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.m.Select#constructor sap.m.Select}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * A select that display items on 2 level of hierarchy.
 * If a provided item has a custom data named "secondLevel", then it will be displayed as a second level, otherwise it would be displayed as a first level.
 * @extends sap.m.Select
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.uxap.HierarchicalSelect = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.uxap.HierarchicalSelect with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.m.Select.extend}.
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object. If not given, it defaults to <code>sap.ui.core.ElementMetadata</code>.
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.uxap.HierarchicalSelect.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.uxap.HierarchicalSelect.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.uxap.HierarchicalSelect.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property <code>upperCase</code>.
 * 
 * Determines whether the HierarchicalSelect items are displayed in upper case.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>upperCase</code>
 * @public
 * 
 */
sap.uxap.HierarchicalSelect.prototype.getUpperCase = function() { return false; };

/**
 * Sets a new value for property <code>upperCase</code>.
 * 
 * Determines whether the HierarchicalSelect items are displayed in upper case.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bUpperCase New value for property <code>upperCase</code>
 * @returns {sap.uxap.HierarchicalSelect} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.uxap.HierarchicalSelect.prototype.setUpperCase = function(bUpperCase) { return new sap.uxap.HierarchicalSelect(); };


// ---- sap.uxap.Importance --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.uxap.Importance.toString = function() { return ""; };

// ---- sap.uxap.ModelMapping --------------------------------------------------------------------------

/**
 * Constructor for a new ModelMapping.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getExternalModelName externalModelName} : string</li>
 * <li>{@link #getInternalModelName internalModelName} : string (default: Model)</li>
 * <li>{@link #getExternalPath externalPath} : string</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * 
 * Define the entity that will be passed to the ObjectPageLayout.
 * @extends sap.ui.core.Element
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.uxap.ModelMapping = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.uxap.ModelMapping with name <code>sClassName</code>
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
sap.uxap.ModelMapping.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property <code>externalModelName</code>.
 * @returns {string} Value of property <code>externalModelName</code>
 * @public
 * 
 */
sap.uxap.ModelMapping.prototype.getExternalModelName = function() { return ""; };

/**
 * Gets current value of property <code>externalPath</code>.
 * @returns {string} Value of property <code>externalPath</code>
 * @public
 * 
 */
sap.uxap.ModelMapping.prototype.getExternalPath = function() { return ""; };

/**
 * Gets current value of property <code>internalModelName</code>.
 * 
 * 
 * 
 * Default value is <code>Model</code>.
 * @returns {string} Value of property <code>internalModelName</code>
 * @public
 * 
 */
sap.uxap.ModelMapping.prototype.getInternalModelName = function() { return ""; };

/**
 * Returns a metadata object for class sap.uxap.ModelMapping.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.uxap.ModelMapping.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Sets a new value for property <code>externalModelName</code>.
 * 
 * 
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sExternalModelName New value for property <code>externalModelName</code>
 * @returns {sap.uxap.ModelMapping} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.uxap.ModelMapping.prototype.setExternalModelName = function(sExternalModelName) { return new sap.uxap.ModelMapping(); };

/**
 * Sets a new value for property <code>externalPath</code>.
 * 
 * 
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sExternalPath New value for property <code>externalPath</code>
 * @returns {sap.uxap.ModelMapping} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.uxap.ModelMapping.prototype.setExternalPath = function(sExternalPath) { return new sap.uxap.ModelMapping(); };

/**
 * Sets a new value for property <code>internalModelName</code>.
 * 
 * 
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Model</code>.
 * @param {string} sInternalModelName New value for property <code>internalModelName</code>
 * @returns {sap.uxap.ModelMapping} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.uxap.ModelMapping.prototype.setInternalModelName = function(sInternalModelName) { return new sap.uxap.ModelMapping(); };


// ---- sap.uxap.ObjectPageConfigurationMode --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.uxap.ObjectPageConfigurationMode.toString = function() { return ""; };

// ---- sap.uxap.ObjectPageHeader --------------------------------------------------------------------------

/**
 * Constructor for a new ObjectPageHeader.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getObjectImageURI objectImageURI} : string</li>
 * <li>{@link #getObjectImageAlt objectImageAlt} : string (default: )</li>
 * <li>{@link #getObjectImageDensityAware objectImageDensityAware} : boolean (default: false)</li>
 * <li>{@link #getObjectTitle objectTitle} : string</li>
 * <li>{@link #getObjectSubtitle objectSubtitle} : string</li>
 * <li>{@link #getObjectImageShape objectImageShape} : sap.uxap.ObjectPageHeaderPictureShape (default: Square)</li>
 * <li>{@link #getIsObjectIconAlwaysVisible isObjectIconAlwaysVisible} : boolean (default: false)</li>
 * <li>{@link #getIsObjectTitleAlwaysVisible isObjectTitleAlwaysVisible} : boolean (default: true)</li>
 * <li>{@link #getIsObjectSubtitleAlwaysVisible isObjectSubtitleAlwaysVisible} : boolean (default: true)</li>
 * <li>{@link #getIsActionAreaAlwaysVisible isActionAreaAlwaysVisible} : boolean (default: true)</li>
 * <li>{@link #getHeaderDesign headerDesign} : sap.uxap.ObjectPageHeaderDesign (default: Light)</li>
 * <li>{@link #getShowTitleSelector showTitleSelector} : boolean (default: false)</li>
 * <li>{@link #getMarkFavorite markFavorite} : boolean (default: false)</li>
 * <li>{@link #getMarkFlagged markFlagged} : boolean (default: false)</li>
 * <li>{@link #getShowMarkers showMarkers} : boolean (default: false)</li>
 * <li>{@link #getMarkLocked markLocked} : boolean (default: false)</li>
 * <li>{@link #getShowPlaceholder showPlaceholder} : boolean (default: false)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getBreadCrumbsLinks breadCrumbsLinks} : sap.m.Link[]</li>
 * <li>{@link #getNavigationBar navigationBar} : sap.m.Bar</li>
 * <li>{@link #getActions actions} : sap.ui.core.Control[]</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:titleSelectorPress titleSelectorPress} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:markLockedPress markLockedPress} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * ObjectPageHeader represents the static part of an Object page header.
 * Typically used to display the basic information about a business object, such as title/description/picture, as well as a list of common actions.
 * @extends sap.ui.core.Control
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.uxap.ObjectPageHeader = function(sId,mSettings) {};
/**
 * The event is fired when the Locked button is pressed
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.domRef Dom reference of the lock item's icon to be used for positioning.
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.markLockedPress = function(oControlEvent) {  };

/**
 * The event is fired when the objectPage header title selector (down-arrow) is pressed
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.domRef Dom reference of the title item's icon to be used for positioning.
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.titleSelectorPress = function(oControlEvent) {  };

/**
 * Adds some action into the aggregation named <code>actions</code>.
 * @param {sap.ui.core.Control}
 *            oAction the action to add; to add; if empty, nothing is inserted
 * @returns {sap.uxap.ObjectPageHeader} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.addAction = function(oAction) { return new sap.uxap.ObjectPageHeader(); };

/**
 * Adds some breadCrumbLink into the aggregation named <code>breadCrumbsLinks</code>.
 * @param {sap.m.Link}
 *            oBreadCrumbLink the breadCrumbLink to add; to add; if empty, nothing is inserted
 * @returns {sap.uxap.ObjectPageHeader} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.addBreadCrumbLink = function(oBreadCrumbLink) { return new sap.uxap.ObjectPageHeader(); };

/**
 * Attaches event handler <code>fnFunction</code> to the 'markLockedPress' event of this <code>sap.uxap.ObjectPageHeader</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise it will be bound to this <code>sap.uxap.ObjectPageHeader</code> itself.
 * 
 * The event is fired when the Locked button is pressed
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to be called when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.uxap.ObjectPageHeader</code> itself.
 * @returns {sap.uxap.ObjectPageHeader} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.attachMarkLockedPress = function(oData,fnFunction,oListener) { return new sap.uxap.ObjectPageHeader(); };

/**
 * Attaches event handler <code>fnFunction</code> to the 'titleSelectorPress' event of this <code>sap.uxap.ObjectPageHeader</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise it will be bound to this <code>sap.uxap.ObjectPageHeader</code> itself.
 * 
 * The event is fired when the objectPage header title selector (down-arrow) is pressed
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to be called when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.uxap.ObjectPageHeader</code> itself.
 * @returns {sap.uxap.ObjectPageHeader} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.attachTitleSelectorPress = function(oData,fnFunction,oListener) { return new sap.uxap.ObjectPageHeader(); };

/**
 * Destroys all the actions in the aggregation
 * named <code>actions</code>.
 * @returns {sap.uxap.ObjectPageHeader} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.destroyActions = function() { return new sap.uxap.ObjectPageHeader(); };

/**
 * Destroys all the breadCrumbsLinks in the aggregation
 * named <code>breadCrumbsLinks</code>.
 * @returns {sap.uxap.ObjectPageHeader} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.destroyBreadCrumbsLinks = function() { return new sap.uxap.ObjectPageHeader(); };

/**
 * Destroys the navigationBar in the aggregation
 * named <code>navigationBar</code>.
 * @returns {sap.uxap.ObjectPageHeader} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.destroyNavigationBar = function() { return new sap.uxap.ObjectPageHeader(); };

/**
 * Detaches event handler <code>fnFunction</code> from the 'markLockedPress' event of this <code>sap.uxap.ObjectPageHeader</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @returns {sap.uxap.ObjectPageHeader} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.detachMarkLockedPress = function(fnFunction,oListener) { return new sap.uxap.ObjectPageHeader(); };

/**
 * Detaches event handler <code>fnFunction</code> from the 'titleSelectorPress' event of this <code>sap.uxap.ObjectPageHeader</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @returns {sap.uxap.ObjectPageHeader} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.detachTitleSelectorPress = function(fnFunction,oListener) { return new sap.uxap.ObjectPageHeader(); };

/**
 * Creates a new subclass of class sap.uxap.ObjectPageHeader with name <code>sClassName</code>
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
sap.uxap.ObjectPageHeader.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event markLockedPress to attached listeners.
 * 
 * Expects the following event parameters:
 * <ul>
 * <li>'domRef' of type <code>string</code>Dom reference of the lock item's icon to be used for positioning.</li>
 * </ul>
 * @param {Map} [mArguments] The arguments to pass along with the event.
 * @returns {sap.uxap.ObjectPageHeader} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.uxap.ObjectPageHeader.prototype.fireMarkLockedPress = function(mArguments) { return new sap.uxap.ObjectPageHeader(); };

/**
 * Fires event titleSelectorPress to attached listeners.
 * 
 * Expects the following event parameters:
 * <ul>
 * <li>'domRef' of type <code>string</code>Dom reference of the title item's icon to be used for positioning.</li>
 * </ul>
 * @param {Map} [mArguments] The arguments to pass along with the event.
 * @returns {sap.uxap.ObjectPageHeader} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.uxap.ObjectPageHeader.prototype.fireTitleSelectorPress = function(mArguments) { return new sap.uxap.ObjectPageHeader(); };

/**
 * Gets content of aggregation <code>actions</code>.
 * 
 * 
 * List of actions that will be displayed in the header.
 * You can use ObjectPageHeaderActionButton controls to achieve a different visual representation of the action buttons in the action bar and the action sheet (overflow menu).
 * You can use ObjectPageHeaderLayoutData to display a visual separator.
 * @returns {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.getActions = function() { return new Array(); };

/**
 * Gets content of aggregation <code>breadCrumbsLinks</code>.
 * 
 * 
 * A list of all the active link elements in the BreadCrumbs control.
 * @returns {sap.m.Link[]}
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.getBreadCrumbsLinks = function() { return new Array(); };

/**
 * Gets current value of property <code>headerDesign</code>.
 * 
 * Determines the design of the header - Light or Dark
 * 
 * Default value is <code>Light</code>.
 * @returns {sap.uxap.ObjectPageHeaderDesign} Value of property <code>headerDesign</code>
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.getHeaderDesign = function() { return new sap.uxap.ObjectPageHeaderDesign(); };

/**
 * Gets current value of property <code>isActionAreaAlwaysVisible</code>.
 * 
 * Determines whether the action buttons should always be visible or if they should be visible only when scrolling.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>isActionAreaAlwaysVisible</code>
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.getIsActionAreaAlwaysVisible = function() { return false; };

/**
 * Gets current value of property <code>isObjectIconAlwaysVisible</code>.
 * 
 * Determines whether the icon should always be visible or if it should be visible only when scrolling.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>isObjectIconAlwaysVisible</code>
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.getIsObjectIconAlwaysVisible = function() { return false; };

/**
 * Gets current value of property <code>isObjectSubtitleAlwaysVisible</code>.
 * 
 * Determines whether the subtitle should always be visible or if it should be visible only when scrolling.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>isObjectSubtitleAlwaysVisible</code>
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.getIsObjectSubtitleAlwaysVisible = function() { return false; };

/**
 * Gets current value of property <code>isObjectTitleAlwaysVisible</code>.
 * 
 * Determines whether the title should always be visible or if it should be visible only when scrolling.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>isObjectTitleAlwaysVisible</code>
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.getIsObjectTitleAlwaysVisible = function() { return false; };

/**
 * Gets current value of property <code>markFavorite</code>.
 * 
 * Set the favorite state to true or false. The showMarkers property must be true for this property to take effect.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>markFavorite</code>
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.getMarkFavorite = function() { return false; };

/**
 * Gets current value of property <code>markFlagged</code>.
 * 
 * Set the flagged state to true or false. The showMarkers property must be true for this property to take effect.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>markFlagged</code>
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.getMarkFlagged = function() { return false; };

/**
 * Gets current value of property <code>markLocked</code>.
 * 
 * Set the locked state of the objectPageHeader.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>markLocked</code>
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.getMarkLocked = function() { return false; };

/**
 * Returns a metadata object for class sap.uxap.ObjectPageHeader.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.uxap.ObjectPageHeader.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets content of aggregation <code>navigationBar</code>.
 * 
 * 
 * An instance of sap.uxap.AnchorBar to be embedded in the header
 * @returns {sap.m.Bar}
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.getNavigationBar = function() { return new sap.m.Bar(); };

/**
 * Gets current value of property <code>objectImageAlt</code>.
 * 
 * The text to be used for the Alt attribute of the image, supplied via the objectImageURI property
 * 
 * Default value is <code></code>.
 * @returns {string} Value of property <code>objectImageAlt</code>
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.getObjectImageAlt = function() { return ""; };

/**
 * Gets current value of property <code>objectImageDensityAware</code>.
 * 
 * The value of densityAware for the image, supplied via the objectImageURI property.
 * See sap.m.Image for more details on densityAware.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>objectImageDensityAware</code>
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.getObjectImageDensityAware = function() { return false; };

/**
 * Gets current value of property <code>objectImageShape</code>.
 * 
 * Determines whether the picture should be displayed in a square or with a circle-shaped mask.
 * 
 * Default value is <code>Square</code>.
 * @returns {sap.uxap.ObjectPageHeaderPictureShape} Value of property <code>objectImageShape</code>
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.getObjectImageShape = function() { return new sap.uxap.ObjectPageHeaderPictureShape(); };

/**
 * Gets current value of property <code>objectImageURI</code>.
 * 
 * The URL of the image, representing the business object
 * @returns {string} Value of property <code>objectImageURI</code>
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.getObjectImageURI = function() { return ""; };

/**
 * Gets current value of property <code>objectSubtitle</code>.
 * 
 * The description of the object
 * @returns {string} Value of property <code>objectSubtitle</code>
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.getObjectSubtitle = function() { return ""; };

/**
 * Gets current value of property <code>objectTitle</code>.
 * 
 * The title of the object
 * @returns {string} Value of property <code>objectTitle</code>
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.getObjectTitle = function() { return ""; };

/**
 * Gets current value of property <code>showMarkers</code>.
 * 
 * Indicates if object page header title supports showing markers such as flagged and favorite.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>showMarkers</code>
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.getShowMarkers = function() { return false; };

/**
 * Gets current value of property <code>showPlaceholder</code>.
 * 
 * Enables support of a placeholder image in case no image is specified or the URL of the provided image is invalid.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>showPlaceholder</code>
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.getShowPlaceholder = function() { return false; };

/**
 * Gets current value of property <code>showTitleSelector</code>.
 * 
 * When set to true, the selector arrow icon/image is shown and can be pressed.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>showTitleSelector</code>
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.getShowTitleSelector = function() { return false; };

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>actions</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *           oAction The action whose index is looked for.
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.indexOfAction = function(oAction) { return 0; };

/**
 * Checks for the provided <code>sap.m.Link</code> in the aggregation named <code>breadCrumbsLinks</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.m.Link}
 *           oBreadCrumbLink The breadCrumbLink whose index is looked for.
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.indexOfBreadCrumbLink = function(oBreadCrumbLink) { return 0; };

/**
 * Inserts a action into the aggregation named <code>actions</code>.
 * @param {sap.ui.core.Control}
 *            oAction the action to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the action should be inserted at; for
 *              a negative value of <code>iIndex</code>, the action is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the action is inserted at
 *              the last position
 * @returns {sap.uxap.ObjectPageHeader} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.insertAction = function(oAction,iIndex) { return new sap.uxap.ObjectPageHeader(); };

/**
 * Inserts a breadCrumbLink into the aggregation named <code>breadCrumbsLinks</code>.
 * @param {sap.m.Link}
 *            oBreadCrumbLink the breadCrumbLink to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the breadCrumbLink should be inserted at; for
 *              a negative value of <code>iIndex</code>, the breadCrumbLink is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the breadCrumbLink is inserted at
 *              the last position
 * @returns {sap.uxap.ObjectPageHeader} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.insertBreadCrumbLink = function(oBreadCrumbLink,iIndex) { return new sap.uxap.ObjectPageHeader(); };

/**
 * Removes a action from the aggregation named <code>actions</code>.
 * @param {int | string | sap.ui.core.Control} vAction The actionto remove or its index or id
 * @returns {sap.ui.core.Control} The removed action or <code>null</code>
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.removeAction = function(vAction) { return new sap.ui.core.Control(); };

/**
 * Removes all the controls in the aggregation named <code>actions</code>.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.core.Control[]} An array of the removed elements (might be empty)
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.removeAllActions = function() { return new Array(); };

/**
 * Removes all the controls in the aggregation named <code>breadCrumbsLinks</code>.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.m.Link[]} An array of the removed elements (might be empty)
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.removeAllBreadCrumbsLinks = function() { return new Array(); };

/**
 * Removes a breadCrumbLink from the aggregation named <code>breadCrumbsLinks</code>.
 * @param {int | string | sap.m.Link} vBreadCrumbLink The breadCrumbLinkto remove or its index or id
 * @returns {sap.m.Link} The removed breadCrumbLink or <code>null</code>
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.removeBreadCrumbLink = function(vBreadCrumbLink) { return new sap.m.Link(); };

/**
 * Sets a new value for property <code>headerDesign</code>.
 * 
 * Determines the design of the header - Light or Dark
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Light</code>.
 * @param {sap.uxap.ObjectPageHeaderDesign} sHeaderDesign New value for property <code>headerDesign</code>
 * @returns {sap.uxap.ObjectPageHeader} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.setHeaderDesign = function(sHeaderDesign) { return new sap.uxap.ObjectPageHeader(); };

/**
 * Sets a new value for property <code>isActionAreaAlwaysVisible</code>.
 * 
 * Determines whether the action buttons should always be visible or if they should be visible only when scrolling.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bIsActionAreaAlwaysVisible New value for property <code>isActionAreaAlwaysVisible</code>
 * @returns {sap.uxap.ObjectPageHeader} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.setIsActionAreaAlwaysVisible = function(bIsActionAreaAlwaysVisible) { return new sap.uxap.ObjectPageHeader(); };

/**
 * Sets a new value for property <code>isObjectIconAlwaysVisible</code>.
 * 
 * Determines whether the icon should always be visible or if it should be visible only when scrolling.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bIsObjectIconAlwaysVisible New value for property <code>isObjectIconAlwaysVisible</code>
 * @returns {sap.uxap.ObjectPageHeader} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.setIsObjectIconAlwaysVisible = function(bIsObjectIconAlwaysVisible) { return new sap.uxap.ObjectPageHeader(); };

/**
 * Sets a new value for property <code>isObjectSubtitleAlwaysVisible</code>.
 * 
 * Determines whether the subtitle should always be visible or if it should be visible only when scrolling.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bIsObjectSubtitleAlwaysVisible New value for property <code>isObjectSubtitleAlwaysVisible</code>
 * @returns {sap.uxap.ObjectPageHeader} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.setIsObjectSubtitleAlwaysVisible = function(bIsObjectSubtitleAlwaysVisible) { return new sap.uxap.ObjectPageHeader(); };

/**
 * Sets a new value for property <code>isObjectTitleAlwaysVisible</code>.
 * 
 * Determines whether the title should always be visible or if it should be visible only when scrolling.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bIsObjectTitleAlwaysVisible New value for property <code>isObjectTitleAlwaysVisible</code>
 * @returns {sap.uxap.ObjectPageHeader} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.setIsObjectTitleAlwaysVisible = function(bIsObjectTitleAlwaysVisible) { return new sap.uxap.ObjectPageHeader(); };

/**
 * Sets a new value for property <code>markFavorite</code>.
 * 
 * Set the favorite state to true or false. The showMarkers property must be true for this property to take effect.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bMarkFavorite New value for property <code>markFavorite</code>
 * @returns {sap.uxap.ObjectPageHeader} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.setMarkFavorite = function(bMarkFavorite) { return new sap.uxap.ObjectPageHeader(); };

/**
 * Sets a new value for property <code>markFlagged</code>.
 * 
 * Set the flagged state to true or false. The showMarkers property must be true for this property to take effect.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bMarkFlagged New value for property <code>markFlagged</code>
 * @returns {sap.uxap.ObjectPageHeader} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.setMarkFlagged = function(bMarkFlagged) { return new sap.uxap.ObjectPageHeader(); };

/**
 * Sets a new value for property <code>markLocked</code>.
 * 
 * Set the locked state of the objectPageHeader.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bMarkLocked New value for property <code>markLocked</code>
 * @returns {sap.uxap.ObjectPageHeader} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.setMarkLocked = function(bMarkLocked) { return new sap.uxap.ObjectPageHeader(); };

/**
 * Sets the aggregated <code>navigationBar</code>.
 * @param {sap.m.Bar} oNavigationBar The navigationBar to set
 * @returns {sap.uxap.ObjectPageHeader} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.setNavigationBar = function(oNavigationBar) { return new sap.uxap.ObjectPageHeader(); };

/**
 * Sets a new value for property <code>objectImageAlt</code>.
 * 
 * The text to be used for the Alt attribute of the image, supplied via the objectImageURI property
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code></code>.
 * @param {string} sObjectImageAlt New value for property <code>objectImageAlt</code>
 * @returns {sap.uxap.ObjectPageHeader} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.setObjectImageAlt = function(sObjectImageAlt) { return new sap.uxap.ObjectPageHeader(); };

/**
 * Sets a new value for property <code>objectImageDensityAware</code>.
 * 
 * The value of densityAware for the image, supplied via the objectImageURI property.
 * See sap.m.Image for more details on densityAware.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bObjectImageDensityAware New value for property <code>objectImageDensityAware</code>
 * @returns {sap.uxap.ObjectPageHeader} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.setObjectImageDensityAware = function(bObjectImageDensityAware) { return new sap.uxap.ObjectPageHeader(); };

/**
 * Sets a new value for property <code>objectImageShape</code>.
 * 
 * Determines whether the picture should be displayed in a square or with a circle-shaped mask.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Square</code>.
 * @param {sap.uxap.ObjectPageHeaderPictureShape} sObjectImageShape New value for property <code>objectImageShape</code>
 * @returns {sap.uxap.ObjectPageHeader} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.setObjectImageShape = function(sObjectImageShape) { return new sap.uxap.ObjectPageHeader(); };

/**
 * Sets a new value for property <code>objectImageURI</code>.
 * 
 * The URL of the image, representing the business object
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sObjectImageURI New value for property <code>objectImageURI</code>
 * @returns {sap.uxap.ObjectPageHeader} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.setObjectImageURI = function(sObjectImageURI) { return new sap.uxap.ObjectPageHeader(); };

/**
 * Sets a new value for property <code>objectSubtitle</code>.
 * 
 * The description of the object
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sObjectSubtitle New value for property <code>objectSubtitle</code>
 * @returns {sap.uxap.ObjectPageHeader} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.setObjectSubtitle = function(sObjectSubtitle) { return new sap.uxap.ObjectPageHeader(); };

/**
 * Sets a new value for property <code>showMarkers</code>.
 * 
 * Indicates if object page header title supports showing markers such as flagged and favorite.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bShowMarkers New value for property <code>showMarkers</code>
 * @returns {sap.uxap.ObjectPageHeader} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.setShowMarkers = function(bShowMarkers) { return new sap.uxap.ObjectPageHeader(); };

/**
 * Sets a new value for property <code>showPlaceholder</code>.
 * 
 * Enables support of a placeholder image in case no image is specified or the URL of the provided image is invalid.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bShowPlaceholder New value for property <code>showPlaceholder</code>
 * @returns {sap.uxap.ObjectPageHeader} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.setShowPlaceholder = function(bShowPlaceholder) { return new sap.uxap.ObjectPageHeader(); };

/**
 * Sets a new value for property <code>showTitleSelector</code>.
 * 
 * When set to true, the selector arrow icon/image is shown and can be pressed.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bShowTitleSelector New value for property <code>showTitleSelector</code>
 * @returns {sap.uxap.ObjectPageHeader} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.setShowTitleSelector = function(bShowTitleSelector) { return new sap.uxap.ObjectPageHeader(); };


// ---- sap.uxap.ObjectPageHeaderActionButton --------------------------------------------------------------------------

/**
 * Constructor for a new ObjectPageHeaderActionButton.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getHideText hideText} : boolean (default: true)</li>
 * <li>{@link #getHideIcon hideIcon} : boolean (default: false)</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.m.Button#constructor sap.m.Button}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * 
 * Button that can be used in the ObjectPageHeader action aggregation.
 * @extends sap.m.Button
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.uxap.ObjectPageHeaderActionButton = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.uxap.ObjectPageHeaderActionButton with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.m.Button.extend}.
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object. If not given, it defaults to <code>sap.ui.core.ElementMetadata</code>.
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.uxap.ObjectPageHeaderActionButton.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property <code>hideIcon</code>.
 * 
 * Hide the button icon when rendered into the headerTitle part of the ObjectPageLayout.
 * This is useful if you want to display texts only in the headerTitle part but still want to display text + icon in the actionSheet that appears when not enough space is available on the screen for displaying all actions.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>hideIcon</code>
 * @public
 * 
 */
sap.uxap.ObjectPageHeaderActionButton.prototype.getHideIcon = function() { return false; };

/**
 * Gets current value of property <code>hideText</code>.
 * 
 * Hide the button text when rendered into the headerTitle part of the ObjectPageLayout.
 * This is useful if you want to display icons only in the headerTitle part but still want to display text + icon in the actionSheet that appears when not enough space is available on the screen for displaying all actions.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>hideText</code>
 * @public
 * 
 */
sap.uxap.ObjectPageHeaderActionButton.prototype.getHideText = function() { return false; };

/**
 * Returns a metadata object for class sap.uxap.ObjectPageHeaderActionButton.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.uxap.ObjectPageHeaderActionButton.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Sets a new value for property <code>hideIcon</code>.
 * 
 * Hide the button icon when rendered into the headerTitle part of the ObjectPageLayout.
 * This is useful if you want to display texts only in the headerTitle part but still want to display text + icon in the actionSheet that appears when not enough space is available on the screen for displaying all actions.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bHideIcon New value for property <code>hideIcon</code>
 * @returns {sap.uxap.ObjectPageHeaderActionButton} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.uxap.ObjectPageHeaderActionButton.prototype.setHideIcon = function(bHideIcon) { return new sap.uxap.ObjectPageHeaderActionButton(); };

/**
 * Sets a new value for property <code>hideText</code>.
 * 
 * Hide the button text when rendered into the headerTitle part of the ObjectPageLayout.
 * This is useful if you want to display icons only in the headerTitle part but still want to display text + icon in the actionSheet that appears when not enough space is available on the screen for displaying all actions.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bHideText New value for property <code>hideText</code>
 * @returns {sap.uxap.ObjectPageHeaderActionButton} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.uxap.ObjectPageHeaderActionButton.prototype.setHideText = function(bHideText) { return new sap.uxap.ObjectPageHeaderActionButton(); };


// ---- sap.uxap.ObjectPageHeaderContent --------------------------------------------------------------------------

/**
 * Constructor for a new ObjectPageHeaderContent.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getContentDesign contentDesign} : sap.uxap.ObjectPageHeaderDesign (default: Light)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getContent content} : sap.ui.core.Control[]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * ObjectPageHeaderContent represents the dynamic part of an Object page header. May contain any control.
 * Unlike the Object page header title, the Object page header content is part of the scrolling area of the Object page.
 * This enables it to hold any amount of information and still be usable on a mobile device.
 * @extends sap.ui.core.Control
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.uxap.ObjectPageHeaderContent = function(sId,mSettings) {};
/**
 * Adds some content into the aggregation named <code>content</code>.
 * @param {sap.ui.core.Control}
 *            oContent the content to add; to add; if empty, nothing is inserted
 * @returns {sap.uxap.ObjectPageHeaderContent} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.uxap.ObjectPageHeaderContent.prototype.addContent = function(oContent) { return new sap.uxap.ObjectPageHeaderContent(); };

/**
 * Destroys all the content in the aggregation
 * named <code>content</code>.
 * @returns {sap.uxap.ObjectPageHeaderContent} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.uxap.ObjectPageHeaderContent.prototype.destroyContent = function() { return new sap.uxap.ObjectPageHeaderContent(); };

/**
 * Creates a new subclass of class sap.uxap.ObjectPageHeaderContent with name <code>sClassName</code>
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
sap.uxap.ObjectPageHeaderContent.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets content of aggregation <code>content</code>.
 * 
 * The list of Objects of type sap.ui.core.Control.
 * @returns {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.uxap.ObjectPageHeaderContent.prototype.getContent = function() { return new Array(); };

/**
 * Gets current value of property <code>contentDesign</code>.
 * 
 * Determines the design of the header - Light or Dark
 * 
 * Default value is <code>Light</code>.
 * @returns {sap.uxap.ObjectPageHeaderDesign} Value of property <code>contentDesign</code>
 * @public
 * 
 */
sap.uxap.ObjectPageHeaderContent.prototype.getContentDesign = function() { return new sap.uxap.ObjectPageHeaderDesign(); };

/**
 * Returns a metadata object for class sap.uxap.ObjectPageHeaderContent.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.uxap.ObjectPageHeaderContent.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>content</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *           oContent The content whose index is looked for.
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.uxap.ObjectPageHeaderContent.prototype.indexOfContent = function(oContent) { return 0; };

/**
 * Inserts a content into the aggregation named <code>content</code>.
 * @param {sap.ui.core.Control}
 *            oContent the content to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the content should be inserted at; for
 *              a negative value of <code>iIndex</code>, the content is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the content is inserted at
 *              the last position
 * @returns {sap.uxap.ObjectPageHeaderContent} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.uxap.ObjectPageHeaderContent.prototype.insertContent = function(oContent,iIndex) { return new sap.uxap.ObjectPageHeaderContent(); };

/**
 * Removes all the controls in the aggregation named <code>content</code>.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.core.Control[]} An array of the removed elements (might be empty)
 * @public
 * 
 */
sap.uxap.ObjectPageHeaderContent.prototype.removeAllContent = function() { return new Array(); };

/**
 * Removes a content from the aggregation named <code>content</code>.
 * @param {int | string | sap.ui.core.Control} vContent The contentto remove or its index or id
 * @returns {sap.ui.core.Control} The removed content or <code>null</code>
 * @public
 * 
 */
sap.uxap.ObjectPageHeaderContent.prototype.removeContent = function(vContent) { return new sap.ui.core.Control(); };

/**
 * Sets a new value for property <code>contentDesign</code>.
 * 
 * Determines the design of the header - Light or Dark
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Light</code>.
 * @param {sap.uxap.ObjectPageHeaderDesign} sContentDesign New value for property <code>contentDesign</code>
 * @returns {sap.uxap.ObjectPageHeaderContent} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.uxap.ObjectPageHeaderContent.prototype.setContentDesign = function(sContentDesign) { return new sap.uxap.ObjectPageHeaderContent(); };


// ---- sap.uxap.ObjectPageHeaderDesign --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.uxap.ObjectPageHeaderDesign.toString = function() { return ""; };

// ---- sap.uxap.ObjectPageHeaderLayoutData --------------------------------------------------------------------------

/**
 * Constructor for a new ObjectPageHeaderLayoutData.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getVisibleS visibleS} : boolean (default: true)</li>
 * <li>{@link #getVisibleM visibleM} : boolean (default: true)</li>
 * <li>{@link #getVisibleL visibleL} : boolean (default: true)</li>
 * <li>{@link #getShowSeparatorBefore showSeparatorBefore} : boolean (default: false)</li>
 * <li>{@link #getShowSeparatorAfter showSeparatorAfter} : boolean (default: false)</li>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize (default: auto)</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.LayoutData#constructor sap.ui.core.LayoutData}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * This is a LayoutData Element that can be added to a control if this control is used within an ObjectPage headerContent aggregation
 * @extends sap.ui.core.LayoutData
 * @constructor
 * @public
 * @since 1.16.0
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.uxap.ObjectPageHeaderLayoutData = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.uxap.ObjectPageHeaderLayoutData with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.LayoutData.extend}.
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object. If not given, it defaults to <code>sap.ui.core.ElementMetadata</code>.
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.uxap.ObjectPageHeaderLayoutData.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.uxap.ObjectPageHeaderLayoutData.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.uxap.ObjectPageHeaderLayoutData.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property <code>showSeparatorAfter</code>.
 * 
 * If this property is set the control will display a separator after it.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>showSeparatorAfter</code>
 * @public
 * 
 */
sap.uxap.ObjectPageHeaderLayoutData.prototype.getShowSeparatorAfter = function() { return false; };

/**
 * Gets current value of property <code>showSeparatorBefore</code>.
 * 
 * If this property is set the control will display a separator before it.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>showSeparatorBefore</code>
 * @public
 * 
 */
sap.uxap.ObjectPageHeaderLayoutData.prototype.getShowSeparatorBefore = function() { return false; };

/**
 * Gets current value of property <code>visibleL</code>.
 * 
 * If this property is set the control will be visible (or not) in a large sized layout.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>visibleL</code>
 * @public
 * 
 */
sap.uxap.ObjectPageHeaderLayoutData.prototype.getVisibleL = function() { return false; };

/**
 * Gets current value of property <code>visibleM</code>.
 * 
 * If this property is set the control will be visible (or not) in a medium sized layout.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>visibleM</code>
 * @public
 * 
 */
sap.uxap.ObjectPageHeaderLayoutData.prototype.getVisibleM = function() { return false; };

/**
 * Gets current value of property <code>visibleS</code>.
 * 
 * If this property is set the control will be visible (or not) in a small sized layout.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>visibleS</code>
 * @public
 * 
 */
sap.uxap.ObjectPageHeaderLayoutData.prototype.getVisibleS = function() { return false; };

/**
 * Gets current value of property <code>width</code>.
 * 
 * If this property is set the control will take the provided size.
 * 
 * Default value is <code>auto</code>.
 * @returns {sap.ui.core.CSSSize} Value of property <code>width</code>
 * @public
 * 
 */
sap.uxap.ObjectPageHeaderLayoutData.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * Sets a new value for property <code>showSeparatorAfter</code>.
 * 
 * If this property is set the control will display a separator after it.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bShowSeparatorAfter New value for property <code>showSeparatorAfter</code>
 * @returns {sap.uxap.ObjectPageHeaderLayoutData} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.uxap.ObjectPageHeaderLayoutData.prototype.setShowSeparatorAfter = function(bShowSeparatorAfter) { return new sap.uxap.ObjectPageHeaderLayoutData(); };

/**
 * Sets a new value for property <code>showSeparatorBefore</code>.
 * 
 * If this property is set the control will display a separator before it.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bShowSeparatorBefore New value for property <code>showSeparatorBefore</code>
 * @returns {sap.uxap.ObjectPageHeaderLayoutData} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.uxap.ObjectPageHeaderLayoutData.prototype.setShowSeparatorBefore = function(bShowSeparatorBefore) { return new sap.uxap.ObjectPageHeaderLayoutData(); };

/**
 * Sets a new value for property <code>visibleL</code>.
 * 
 * If this property is set the control will be visible (or not) in a large sized layout.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bVisibleL New value for property <code>visibleL</code>
 * @returns {sap.uxap.ObjectPageHeaderLayoutData} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.uxap.ObjectPageHeaderLayoutData.prototype.setVisibleL = function(bVisibleL) { return new sap.uxap.ObjectPageHeaderLayoutData(); };

/**
 * Sets a new value for property <code>visibleM</code>.
 * 
 * If this property is set the control will be visible (or not) in a medium sized layout.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bVisibleM New value for property <code>visibleM</code>
 * @returns {sap.uxap.ObjectPageHeaderLayoutData} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.uxap.ObjectPageHeaderLayoutData.prototype.setVisibleM = function(bVisibleM) { return new sap.uxap.ObjectPageHeaderLayoutData(); };

/**
 * Sets a new value for property <code>visibleS</code>.
 * 
 * If this property is set the control will be visible (or not) in a small sized layout.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bVisibleS New value for property <code>visibleS</code>
 * @returns {sap.uxap.ObjectPageHeaderLayoutData} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.uxap.ObjectPageHeaderLayoutData.prototype.setVisibleS = function(bVisibleS) { return new sap.uxap.ObjectPageHeaderLayoutData(); };

/**
 * Sets a new value for property <code>width</code>.
 * 
 * If this property is set the control will take the provided size.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>auto</code>.
 * @param {sap.ui.core.CSSSize} sWidth New value for property <code>width</code>
 * @returns {sap.uxap.ObjectPageHeaderLayoutData} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.uxap.ObjectPageHeaderLayoutData.prototype.setWidth = function(sWidth) { return new sap.uxap.ObjectPageHeaderLayoutData(); };


// ---- sap.uxap.ObjectPageHeaderPictureShape --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.uxap.ObjectPageHeaderPictureShape.toString = function() { return ""; };

// ---- sap.uxap.ObjectPageLayout --------------------------------------------------------------------------

/**
 * Constructor for a new ObjectPageLayout.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getShowAnchorBar showAnchorBar} : boolean (default: true)</li>
 * <li>{@link #getShowAnchorBarPopover showAnchorBarPopover} : boolean (default: true)</li>
 * <li>{@link #getUpperCaseAnchorBar upperCaseAnchorBar} : boolean (default: true)</li>
 * <li>{@link #getHeight height} : sap.ui.core.CSSSize (default: 100%)</li>
 * <li>{@link #getEnableLazyLoading enableLazyLoading} : boolean (default: false)</li>
 * <li>{@link #getSubSectionLayout subSectionLayout} : sap.uxap.ObjectPageSubSectionLayout (default: TitleOnTop)</li>
 * <li>{@link #getUseIconTabBar useIconTabBar} : boolean (default: false)</li>
 * <li>{@link #getShowHeaderContent showHeaderContent} : boolean (default: true)</li>
 * <li>{@link #getUseTwoColumnsForLargeScreen useTwoColumnsForLargeScreen} : boolean (default: false)</li>
 * <li>{@link #getShowTitleInHeaderContent showTitleInHeaderContent} : boolean (default: false)</li>
 * <li>{@link #getShowOnlyHighImportance showOnlyHighImportance} : boolean (default: false)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getSections sections} : sap.uxap.ObjectPageSection[]</li>
 * <li>{@link #getHeaderTitle headerTitle} : sap.uxap.ObjectPageHeader</li>
 * <li>{@link #getHeaderContent headerContent} : sap.ui.core.Control[]</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:toggleAnchorBar toggleAnchorBar} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * An ObjectPageLayout is the layout control, used to put together all parts of an Object page - Header, Navigation bar and Sections/Subsections.
 * @extends sap.ui.core.Control
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.uxap.ObjectPageLayout = function(sId,mSettings) {};
/**
 * The event is fired when the Anchor bar is switched from moving to fixed or the other way round.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {boolean} oControlEvent.getParameters.fixed False indicates that the Anchor bar has just detached from the Header and became part of the scrolling area. True means that the Anchor bar has just snapped to the Header.
 * @public
 * 
 */
sap.uxap.ObjectPageLayout.prototype.toggleAnchorBar = function(oControlEvent) {  };

/**
 * Adds some headerContent into the aggregation named <code>headerContent</code>.
 * @param {sap.ui.core.Control}
 *            oHeaderContent the headerContent to add; to add; if empty, nothing is inserted
 * @returns {sap.uxap.ObjectPageLayout} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.uxap.ObjectPageLayout.prototype.addHeaderContent = function(oHeaderContent) { return new sap.uxap.ObjectPageLayout(); };

/**
 * Adds some section into the aggregation named <code>sections</code>.
 * @param {sap.uxap.ObjectPageSection}
 *            oSection the section to add; to add; if empty, nothing is inserted
 * @returns {sap.uxap.ObjectPageLayout} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.uxap.ObjectPageLayout.prototype.addSection = function(oSection) { return new sap.uxap.ObjectPageLayout(); };

/**
 * Attaches event handler <code>fnFunction</code> to the 'toggleAnchorBar' event of this <code>sap.uxap.ObjectPageLayout</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified
 * otherwise it will be bound to this <code>sap.uxap.ObjectPageLayout</code> itself.
 * 
 * The event is fired when the Anchor bar is switched from moving to fixed or the other way round.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to be called when the event occurs.
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.uxap.ObjectPageLayout</code> itself.
 * @returns {sap.uxap.ObjectPageLayout} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.uxap.ObjectPageLayout.prototype.attachToggleAnchorBar = function(oData,fnFunction,oListener) { return new sap.uxap.ObjectPageLayout(); };

/**
 * Destroys all the headerContent in the aggregation
 * named <code>headerContent</code>.
 * @returns {sap.uxap.ObjectPageLayout} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.uxap.ObjectPageLayout.prototype.destroyHeaderContent = function() { return new sap.uxap.ObjectPageLayout(); };

/**
 * Destroys the headerTitle in the aggregation
 * named <code>headerTitle</code>.
 * @returns {sap.uxap.ObjectPageLayout} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.uxap.ObjectPageLayout.prototype.destroyHeaderTitle = function() { return new sap.uxap.ObjectPageLayout(); };

/**
 * Destroys all the sections in the aggregation
 * named <code>sections</code>.
 * @returns {sap.uxap.ObjectPageLayout} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.uxap.ObjectPageLayout.prototype.destroySections = function() { return new sap.uxap.ObjectPageLayout(); };

/**
 * Detaches event handler <code>fnFunction</code> from the 'toggleAnchorBar' event of this <code>sap.uxap.ObjectPageLayout</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @returns {sap.uxap.ObjectPageLayout} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.uxap.ObjectPageLayout.prototype.detachToggleAnchorBar = function(fnFunction,oListener) { return new sap.uxap.ObjectPageLayout(); };

/**
 * Creates a new subclass of class sap.uxap.ObjectPageLayout with name <code>sClassName</code>
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
sap.uxap.ObjectPageLayout.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event toggleAnchorBar to attached listeners.
 * 
 * Expects the following event parameters:
 * <ul>
 * <li>'fixed' of type <code>boolean</code>False indicates that the Anchor bar has just detached from the Header and became part of the scrolling area. True means that the Anchor bar has just snapped to the Header.</li>
 * </ul>
 * @param {Map} [mArguments] The arguments to pass along with the event.
 * @returns {sap.uxap.ObjectPageLayout} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.uxap.ObjectPageLayout.prototype.fireToggleAnchorBar = function(mArguments) { return new sap.uxap.ObjectPageLayout(); };

/**
 * Gets current value of property <code>enableLazyLoading</code>.
 * 
 * Enable lazy loading for the Object page Subsections.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>enableLazyLoading</code>
 * @public
 * 
 */
sap.uxap.ObjectPageLayout.prototype.getEnableLazyLoading = function() { return false; };

/**
 * Gets content of aggregation <code>headerTitle</code>.
 * 
 * Object page header title - the upper, always static, part of the Object page header.
 * @returns {sap.uxap.ObjectPageHeader}
 * @public
 * 
 */
sap.uxap.ObjectPageLayout.prototype.getHeaderTitle = function() { return new sap.uxap.ObjectPageHeader(); };

/**
 * Gets current value of property <code>height</code>.
 * 
 * 
 * 
 * Default value is <code>100%</code>.
 * @returns {sap.ui.core.CSSSize} Value of property <code>height</code>
 * @public
 * 
 */
sap.uxap.ObjectPageLayout.prototype.getHeight = function() { return new sap.ui.core.CSSSize(); };

/**
 * Returns a metadata object for class sap.uxap.ObjectPageLayout.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.uxap.ObjectPageLayout.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Returns the UI5 ID of the Section that is currently being scrolled.
 * @type string
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.uxap.ObjectPageLayout.prototype.getScrollingSectionId = function() { return ""; };

/**
 * Gets content of aggregation <code>sections</code>.
 * 
 * The sections that make up the Object page content area.
 * @returns {sap.uxap.ObjectPageSection[]}
 * @public
 * 
 */
sap.uxap.ObjectPageLayout.prototype.getSections = function() { return new Array(); };

/**
 * Gets current value of property <code>showAnchorBar</code>.
 * 
 * Determines whether the Navigation bar (Anchor bar) is displayed.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>showAnchorBar</code>
 * @public
 * 
 */
sap.uxap.ObjectPageLayout.prototype.getShowAnchorBar = function() { return false; };

/**
 * Gets current value of property <code>showAnchorBarPopover</code>.
 * 
 * Determines whether to show a Popover with Subsection links when clicking on Section links in the Anchor bar.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>showAnchorBarPopover</code>
 * @public
 * 
 */
sap.uxap.ObjectPageLayout.prototype.getShowAnchorBarPopover = function() { return false; };

/**
 * Gets current value of property <code>showHeaderContent</code>.
 * 
 * Determines the visibility of the Header content (headerContent aggregation).
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>showHeaderContent</code>
 * @public
 * 
 */
sap.uxap.ObjectPageLayout.prototype.getShowHeaderContent = function() { return false; };

/**
 * Gets current value of property <code>showOnlyHighImportance</code>.
 * 
 * Determines whether sections and subsections with importance Low and Medium are hidden even on large screens
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>showOnlyHighImportance</code>
 * @since 1.32.0
 * @public
 * 
 */
sap.uxap.ObjectPageLayout.prototype.getShowOnlyHighImportance = function() { return false; };

/**
 * Gets current value of property <code>showTitleInHeaderContent</code>.
 * 
 * Determines whether the title, image, markers and selectTitleArrow are shown in the Header content area.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>showTitleInHeaderContent</code>
 * @public
 * 
 */
sap.uxap.ObjectPageLayout.prototype.getShowTitleInHeaderContent = function() { return false; };

/**
 * Gets current value of property <code>subSectionLayout</code>.
 * 
 * Determines whether Subsection titles are displayed on top or to the left of the Subsection content.
 * 
 * Default value is <code>TitleOnTop</code>.
 * @returns {sap.uxap.ObjectPageSubSectionLayout} Value of property <code>subSectionLayout</code>
 * @public
 * 
 */
sap.uxap.ObjectPageLayout.prototype.getSubSectionLayout = function() { return new sap.uxap.ObjectPageSubSectionLayout(); };

/**
 * Gets current value of property <code>upperCaseAnchorBar</code>.
 * 
 * Determines whether the Anchor bar items are displayed in upper case.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>upperCaseAnchorBar</code>
 * @public
 * 
 */
sap.uxap.ObjectPageLayout.prototype.getUpperCaseAnchorBar = function() { return false; };

/**
 * Gets current value of property <code>useIconTabBar</code>.
 * 
 * Use sap.m.IconTabBar instead of the default Anchor bar
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>useIconTabBar</code>
 * @public
 * 
 */
sap.uxap.ObjectPageLayout.prototype.getUseIconTabBar = function() { return false; };

/**
 * Gets current value of property <code>useTwoColumnsForLargeScreen</code>.
 * 
 * Determines whether the to use two column layout for the L screen size.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>useTwoColumnsForLargeScreen</code>
 * @public
 * 
 */
sap.uxap.ObjectPageLayout.prototype.getUseTwoColumnsForLargeScreen = function() { return false; };

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>headerContent</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *           oHeaderContent The headerContent whose index is looked for.
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.uxap.ObjectPageLayout.prototype.indexOfHeaderContent = function(oHeaderContent) { return 0; };

/**
 * Checks for the provided <code>sap.uxap.ObjectPageSection</code> in the aggregation named <code>sections</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.uxap.ObjectPageSection}
 *           oSection The section whose index is looked for.
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.uxap.ObjectPageLayout.prototype.indexOfSection = function(oSection) { return 0; };

/**
 * Inserts a headerContent into the aggregation named <code>headerContent</code>.
 * @param {sap.ui.core.Control}
 *            oHeaderContent the headerContent to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the headerContent should be inserted at; for
 *              a negative value of <code>iIndex</code>, the headerContent is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the headerContent is inserted at
 *              the last position
 * @returns {sap.uxap.ObjectPageLayout} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.uxap.ObjectPageLayout.prototype.insertHeaderContent = function(oHeaderContent,iIndex) { return new sap.uxap.ObjectPageLayout(); };

/**
 * Inserts a section into the aggregation named <code>sections</code>.
 * @param {sap.uxap.ObjectPageSection}
 *            oSection the section to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the section should be inserted at; for
 *              a negative value of <code>iIndex</code>, the section is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the section is inserted at
 *              the last position
 * @returns {sap.uxap.ObjectPageLayout} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.uxap.ObjectPageLayout.prototype.insertSection = function(oSection,iIndex) { return new sap.uxap.ObjectPageLayout(); };

/**
 * Removes all the controls in the aggregation named <code>headerContent</code>.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.core.Control[]} An array of the removed elements (might be empty)
 * @public
 * 
 */
sap.uxap.ObjectPageLayout.prototype.removeAllHeaderContent = function() { return new Array(); };

/**
 * Removes all the controls in the aggregation named <code>sections</code>.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.uxap.ObjectPageSection[]} An array of the removed elements (might be empty)
 * @public
 * 
 */
sap.uxap.ObjectPageLayout.prototype.removeAllSections = function() { return new Array(); };

/**
 * Removes a headerContent from the aggregation named <code>headerContent</code>.
 * @param {int | string | sap.ui.core.Control} vHeaderContent The headerContentto remove or its index or id
 * @returns {sap.ui.core.Control} The removed headerContent or <code>null</code>
 * @public
 * 
 */
sap.uxap.ObjectPageLayout.prototype.removeHeaderContent = function(vHeaderContent) { return new sap.ui.core.Control(); };

/**
 * Removes a section from the aggregation named <code>sections</code>.
 * @param {int | string | sap.uxap.ObjectPageSection} vSection The sectionto remove or its index or id
 * @returns {sap.uxap.ObjectPageSection} The removed section or <code>null</code>
 * @public
 * 
 */
sap.uxap.ObjectPageLayout.prototype.removeSection = function(vSection) { return new sap.uxap.ObjectPageSection(); };

/**
 * Sets a new value for property <code>enableLazyLoading</code>.
 * 
 * Enable lazy loading for the Object page Subsections.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bEnableLazyLoading New value for property <code>enableLazyLoading</code>
 * @returns {sap.uxap.ObjectPageLayout} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.uxap.ObjectPageLayout.prototype.setEnableLazyLoading = function(bEnableLazyLoading) { return new sap.uxap.ObjectPageLayout(); };

/**
 * Sets the aggregated <code>headerTitle</code>.
 * @param {sap.uxap.ObjectPageHeader} oHeaderTitle The headerTitle to set
 * @returns {sap.uxap.ObjectPageLayout} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.uxap.ObjectPageLayout.prototype.setHeaderTitle = function(oHeaderTitle) { return new sap.uxap.ObjectPageLayout(); };

/**
 * Sets a new value for property <code>height</code>.
 * 
 * 
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>100%</code>.
 * @param {sap.ui.core.CSSSize} sHeight New value for property <code>height</code>
 * @returns {sap.uxap.ObjectPageLayout} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.uxap.ObjectPageLayout.prototype.setHeight = function(sHeight) { return new sap.uxap.ObjectPageLayout(); };

/**
 * Sets a new value for property <code>showAnchorBar</code>.
 * 
 * Determines whether the Navigation bar (Anchor bar) is displayed.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bShowAnchorBar New value for property <code>showAnchorBar</code>
 * @returns {sap.uxap.ObjectPageLayout} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.uxap.ObjectPageLayout.prototype.setShowAnchorBar = function(bShowAnchorBar) { return new sap.uxap.ObjectPageLayout(); };

/**
 * Sets a new value for property <code>showAnchorBarPopover</code>.
 * 
 * Determines whether to show a Popover with Subsection links when clicking on Section links in the Anchor bar.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bShowAnchorBarPopover New value for property <code>showAnchorBarPopover</code>
 * @returns {sap.uxap.ObjectPageLayout} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.uxap.ObjectPageLayout.prototype.setShowAnchorBarPopover = function(bShowAnchorBarPopover) { return new sap.uxap.ObjectPageLayout(); };

/**
 * Sets a new value for property <code>showOnlyHighImportance</code>.
 * 
 * Determines whether sections and subsections with importance Low and Medium are hidden even on large screens
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bShowOnlyHighImportance New value for property <code>showOnlyHighImportance</code>
 * @returns {sap.uxap.ObjectPageLayout} Reference to <code>this</code> in order to allow method chaining
 * @since 1.32.0
 * @public
 * 
 */
sap.uxap.ObjectPageLayout.prototype.setShowOnlyHighImportance = function(bShowOnlyHighImportance) { return new sap.uxap.ObjectPageLayout(); };

/**
 * Sets a new value for property <code>showTitleInHeaderContent</code>.
 * 
 * Determines whether the title, image, markers and selectTitleArrow are shown in the Header content area.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bShowTitleInHeaderContent New value for property <code>showTitleInHeaderContent</code>
 * @returns {sap.uxap.ObjectPageLayout} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.uxap.ObjectPageLayout.prototype.setShowTitleInHeaderContent = function(bShowTitleInHeaderContent) { return new sap.uxap.ObjectPageLayout(); };

/**
 * Sets a new value for property <code>subSectionLayout</code>.
 * 
 * Determines whether Subsection titles are displayed on top or to the left of the Subsection content.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>TitleOnTop</code>.
 * @param {sap.uxap.ObjectPageSubSectionLayout} sSubSectionLayout New value for property <code>subSectionLayout</code>
 * @returns {sap.uxap.ObjectPageLayout} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.uxap.ObjectPageLayout.prototype.setSubSectionLayout = function(sSubSectionLayout) { return new sap.uxap.ObjectPageLayout(); };

/**
 * Sets a new value for property <code>upperCaseAnchorBar</code>.
 * 
 * Determines whether the Anchor bar items are displayed in upper case.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bUpperCaseAnchorBar New value for property <code>upperCaseAnchorBar</code>
 * @returns {sap.uxap.ObjectPageLayout} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.uxap.ObjectPageLayout.prototype.setUpperCaseAnchorBar = function(bUpperCaseAnchorBar) { return new sap.uxap.ObjectPageLayout(); };

/**
 * Sets a new value for property <code>useTwoColumnsForLargeScreen</code>.
 * 
 * Determines whether the to use two column layout for the L screen size.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bUseTwoColumnsForLargeScreen New value for property <code>useTwoColumnsForLargeScreen</code>
 * @returns {sap.uxap.ObjectPageLayout} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.uxap.ObjectPageLayout.prototype.setUseTwoColumnsForLargeScreen = function(bUseTwoColumnsForLargeScreen) { return new sap.uxap.ObjectPageLayout(); };


// ---- sap.uxap.ObjectPageSection --------------------------------------------------------------------------

/**
 * Constructor for a new ObjectPageSection.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getShowTitle showTitle} : boolean (default: true)</li>
 * <li>{@link #getTitleUppercase titleUppercase} : boolean (default: true)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getSubSections subSections} : sap.uxap.ObjectPageSubSection[]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.uxap.ObjectPageSectionBase#constructor sap.uxap.ObjectPageSectionBase}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * 
 * An ObjectPageSection is the top-level information container of an Object page. Its purpose is to aggregate Subsections.
 * Disclaimer: This control is intended to be used only as part of the Object page layout
 * @extends sap.uxap.ObjectPageSectionBase
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.uxap.ObjectPageSection = function(sId,mSettings) {};
/**
 * Adds some subSection into the aggregation named <code>subSections</code>.
 * @param {sap.uxap.ObjectPageSubSection}
 *            oSubSection the subSection to add; to add; if empty, nothing is inserted
 * @returns {sap.uxap.ObjectPageSection} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.uxap.ObjectPageSection.prototype.addSubSection = function(oSubSection) { return new sap.uxap.ObjectPageSection(); };

/**
 * Destroys all the subSections in the aggregation
 * named <code>subSections</code>.
 * @returns {sap.uxap.ObjectPageSection} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.uxap.ObjectPageSection.prototype.destroySubSections = function() { return new sap.uxap.ObjectPageSection(); };

/**
 * Creates a new subclass of class sap.uxap.ObjectPageSection with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.uxap.ObjectPageSectionBase.extend}.
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object. If not given, it defaults to <code>sap.ui.core.ElementMetadata</code>.
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.uxap.ObjectPageSection.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.uxap.ObjectPageSection.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.uxap.ObjectPageSection.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * ID of the element which is the current target of the <code>selectedSubSection</code> association, or <code>null</code>.
 * 
 * The most recently selected Subsection by the user.
 * @returns {sap.uxap.ObjectPageSubSection}
 * @public
 * 
 */
sap.uxap.ObjectPageSection.prototype.getSelectedSubSection = function() { return new sap.uxap.ObjectPageSubSection(); };

/**
 * Gets current value of property <code>showTitle</code>.
 * 
 * Determines whether to display the Section title or not.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>showTitle</code>
 * @public
 * 
 */
sap.uxap.ObjectPageSection.prototype.getShowTitle = function() { return false; };

/**
 * Gets content of aggregation <code>subSections</code>.
 * 
 * The list of Subsections.
 * @returns {sap.uxap.ObjectPageSubSection[]}
 * @public
 * 
 */
sap.uxap.ObjectPageSection.prototype.getSubSections = function() { return new Array(); };

/**
 * Gets current value of property <code>titleUppercase</code>.
 * 
 * Determines whether the Section title is displayed in upper case.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>titleUppercase</code>
 * @public
 * 
 */
sap.uxap.ObjectPageSection.prototype.getTitleUppercase = function() { return false; };

/**
 * Checks for the provided <code>sap.uxap.ObjectPageSubSection</code> in the aggregation named <code>subSections</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.uxap.ObjectPageSubSection}
 *           oSubSection The subSection whose index is looked for.
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.uxap.ObjectPageSection.prototype.indexOfSubSection = function(oSubSection) { return 0; };

/**
 * Inserts a subSection into the aggregation named <code>subSections</code>.
 * @param {sap.uxap.ObjectPageSubSection}
 *            oSubSection the subSection to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the subSection should be inserted at; for
 *              a negative value of <code>iIndex</code>, the subSection is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the subSection is inserted at
 *              the last position
 * @returns {sap.uxap.ObjectPageSection} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.uxap.ObjectPageSection.prototype.insertSubSection = function(oSubSection,iIndex) { return new sap.uxap.ObjectPageSection(); };

/**
 * Removes all the controls in the aggregation named <code>subSections</code>.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.uxap.ObjectPageSubSection[]} An array of the removed elements (might be empty)
 * @public
 * 
 */
sap.uxap.ObjectPageSection.prototype.removeAllSubSections = function() { return new Array(); };

/**
 * Removes a subSection from the aggregation named <code>subSections</code>.
 * @param {int | string | sap.uxap.ObjectPageSubSection} vSubSection The subSectionto remove or its index or id
 * @returns {sap.uxap.ObjectPageSubSection} The removed subSection or <code>null</code>
 * @public
 * 
 */
sap.uxap.ObjectPageSection.prototype.removeSubSection = function(vSubSection) { return new sap.uxap.ObjectPageSubSection(); };

/**
 * Sets the associated <code>selectedSubSection</code>.
 * @param {sap.uxap.ObjectPageSubSection} oSelectedSubSection Id of an element which becomes the new target of this selectedSubSection association. Alternatively, an element instance may be given.
 * @returns {sap.uxap.ObjectPageSection} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.uxap.ObjectPageSection.prototype.setSelectedSubSection = function(oSelectedSubSection) { return new sap.uxap.ObjectPageSection(); };

/**
 * Sets a new value for property <code>showTitle</code>.
 * 
 * Determines whether to display the Section title or not.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bShowTitle New value for property <code>showTitle</code>
 * @returns {sap.uxap.ObjectPageSection} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.uxap.ObjectPageSection.prototype.setShowTitle = function(bShowTitle) { return new sap.uxap.ObjectPageSection(); };

/**
 * Sets a new value for property <code>titleUppercase</code>.
 * 
 * Determines whether the Section title is displayed in upper case.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bTitleUppercase New value for property <code>titleUppercase</code>
 * @returns {sap.uxap.ObjectPageSection} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.uxap.ObjectPageSection.prototype.setTitleUppercase = function(bTitleUppercase) { return new sap.uxap.ObjectPageSection(); };


// ---- sap.uxap.ObjectPageSectionBase --------------------------------------------------------------------------

/**
 * Constructor for a new ObjectPageSectionBase.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getTitle title} : string</li>
 * <li>{@link #getVisible visible} : boolean (default: true)</li>
 * <li>{@link #getImportance importance} : sap.uxap.Importance (default: library.Importance.High)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getCustomAnchorBarButton customAnchorBarButton} : sap.m.Button</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * An abstract container for object page sections and subSections
 * @extends sap.ui.core.Control
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.uxap.ObjectPageSectionBase = function(sId,mSettings) {};
/**
 * Explicitly ask to connect to the UI5 model tree
 * @type void
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.uxap.ObjectPageSectionBase.prototype.connectToModels = function() { return null; };

/**
 * Destroys the customAnchorBarButton in the aggregation
 * named <code>customAnchorBarButton</code>.
 * @returns {sap.uxap.ObjectPageSectionBase} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.uxap.ObjectPageSectionBase.prototype.destroyCustomAnchorBarButton = function() { return new sap.uxap.ObjectPageSectionBase(); };

/**
 * Creates a new subclass of class sap.uxap.ObjectPageSectionBase with name <code>sClassName</code>
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
sap.uxap.ObjectPageSectionBase.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets content of aggregation <code>customAnchorBarButton</code>.
 * 
 * The custom button that will provide a link to the section in the ObjectPageLayout anchor bar.
 * This button will be used as a custom template to be into the ObjectPageLayout anchorBar area, therefore property changes happening on this button template after the first rendering won't affect the actual button copy used in the anchorBar.
 * 
 * If you want to change some of the button properties, you would need to bind them to a model.
 * @returns {sap.m.Button}
 * @public
 * 
 */
sap.uxap.ObjectPageSectionBase.prototype.getCustomAnchorBarButton = function() { return new sap.m.Button(); };

/**
 * Gets current value of property <code>importance</code>.
 * 
 * Determines whether the section will be hidden on low resolutions.
 * 
 * Default value is <code>library.Importance.High</code>.
 * @returns {sap.uxap.Importance} Value of property <code>importance</code>
 * @since 1.32.0
 * @public
 * 
 */
sap.uxap.ObjectPageSectionBase.prototype.getImportance = function() { return new sap.uxap.Importance(); };

/**
 * Returns a metadata object for class sap.uxap.ObjectPageSectionBase.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.uxap.ObjectPageSectionBase.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property <code>title</code>.
 * 
 * Section Title
 * @returns {string} Value of property <code>title</code>
 * @public
 * 
 */
sap.uxap.ObjectPageSectionBase.prototype.getTitle = function() { return ""; };

/**
 * Gets current value of property <code>visible</code>.
 * 
 * Invisible ObjectPageSectionBase are not rendered
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>visible</code>
 * @public
 * 
 */
sap.uxap.ObjectPageSectionBase.prototype.getVisible = function() { return false; };

/**
 * Sets the aggregated <code>customAnchorBarButton</code>.
 * @param {sap.m.Button} oCustomAnchorBarButton The customAnchorBarButton to set
 * @returns {sap.uxap.ObjectPageSectionBase} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.uxap.ObjectPageSectionBase.prototype.setCustomAnchorBarButton = function(oCustomAnchorBarButton) { return new sap.uxap.ObjectPageSectionBase(); };

/**
 * Sets a new value for property <code>importance</code>.
 * 
 * Determines whether the section will be hidden on low resolutions.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>library.Importance.High</code>.
 * @param {sap.uxap.Importance} sImportance New value for property <code>importance</code>
 * @returns {sap.uxap.ObjectPageSectionBase} Reference to <code>this</code> in order to allow method chaining
 * @since 1.32.0
 * @public
 * 
 */
sap.uxap.ObjectPageSectionBase.prototype.setImportance = function(sImportance) { return new sap.uxap.ObjectPageSectionBase(); };

/**
 * Sets a new value for property <code>title</code>.
 * 
 * Section Title
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sTitle New value for property <code>title</code>
 * @returns {sap.uxap.ObjectPageSectionBase} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.uxap.ObjectPageSectionBase.prototype.setTitle = function(sTitle) { return new sap.uxap.ObjectPageSectionBase(); };

/**
 * Sets a new value for property <code>visible</code>.
 * 
 * Invisible ObjectPageSectionBase are not rendered
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bVisible New value for property <code>visible</code>
 * @returns {sap.uxap.ObjectPageSectionBase} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.uxap.ObjectPageSectionBase.prototype.setVisible = function(bVisible) { return new sap.uxap.ObjectPageSectionBase(); };


// ---- sap.uxap.ObjectPageSubSection --------------------------------------------------------------------------

/**
 * Constructor for a new ObjectPageSubSection.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getMode mode} : sap.uxap.ObjectPageSubSectionMode (default: Collapsed)</li>
 * <li>{@link #getTitleUppercase titleUppercase} : boolean (default: false)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getBlocks blocks} : sap.ui.core.Control[]</li>
 * <li>{@link #getMoreBlocks moreBlocks} : sap.ui.core.Control[]</li>
 * <li>{@link #getActions actions} : sap.ui.core.Control[]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.uxap.ObjectPageSectionBase#constructor sap.uxap.ObjectPageSectionBase}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * 
 * An ObjectPageSubSection is the second-level information container of an Object page and may only be used within an Object page section.
 * Subsections may display primary information in the so called blocks aggregation (always visible)
 * and not-so-important information in the moreBlocks aggregation, whose content is initially hidden, but may be accessed via a See more (...) button.
 * Disclaimer: This control is intended to be used only as part of the Object page layout
 * @extends sap.uxap.ObjectPageSectionBase
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.uxap.ObjectPageSubSection = function(sId,mSettings) {};
/**
 * Adds some action into the aggregation named <code>actions</code>.
 * @param {sap.ui.core.Control}
 *            oAction the action to add; to add; if empty, nothing is inserted
 * @returns {sap.uxap.ObjectPageSubSection} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.uxap.ObjectPageSubSection.prototype.addAction = function(oAction) { return new sap.uxap.ObjectPageSubSection(); };

/**
 * Adds some block into the aggregation named <code>blocks</code>.
 * @param {sap.ui.core.Control}
 *            oBlock the block to add; to add; if empty, nothing is inserted
 * @returns {sap.uxap.ObjectPageSubSection} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.uxap.ObjectPageSubSection.prototype.addBlock = function(oBlock) { return new sap.uxap.ObjectPageSubSection(); };

/**
 * Adds some moreBlock into the aggregation named <code>moreBlocks</code>.
 * @param {sap.ui.core.Control}
 *            oMoreBlock the moreBlock to add; to add; if empty, nothing is inserted
 * @returns {sap.uxap.ObjectPageSubSection} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.uxap.ObjectPageSubSection.prototype.addMoreBlock = function(oMoreBlock) { return new sap.uxap.ObjectPageSubSection(); };

/**
 * Destroys all the actions in the aggregation
 * named <code>actions</code>.
 * @returns {sap.uxap.ObjectPageSubSection} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.uxap.ObjectPageSubSection.prototype.destroyActions = function() { return new sap.uxap.ObjectPageSubSection(); };

/**
 * Destroys all the blocks in the aggregation
 * named <code>blocks</code>.
 * @returns {sap.uxap.ObjectPageSubSection} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.uxap.ObjectPageSubSection.prototype.destroyBlocks = function() { return new sap.uxap.ObjectPageSubSection(); };

/**
 * Destroys all the moreBlocks in the aggregation
 * named <code>moreBlocks</code>.
 * @returns {sap.uxap.ObjectPageSubSection} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.uxap.ObjectPageSubSection.prototype.destroyMoreBlocks = function() { return new sap.uxap.ObjectPageSubSection(); };

/**
 * Creates a new subclass of class sap.uxap.ObjectPageSubSection with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.uxap.ObjectPageSectionBase.extend}.
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object. If not given, it defaults to <code>sap.ui.core.ElementMetadata</code>.
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.uxap.ObjectPageSubSection.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets content of aggregation <code>actions</code>.
 * 
 * Actions available for this Subsection
 * @returns {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.uxap.ObjectPageSubSection.prototype.getActions = function() { return new Array(); };

/**
 * Gets content of aggregation <code>blocks</code>.
 * 
 * Controls to be displayed in the subsection
 * @returns {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.uxap.ObjectPageSubSection.prototype.getBlocks = function() { return new Array(); };

/**
 * Returns a metadata object for class sap.uxap.ObjectPageSubSection.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.uxap.ObjectPageSubSection.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property <code>mode</code>.
 * 
 * A mode property that will be passed to the controls in the blocks and moreBlocks aggregations. Only relevant if these aggregations use Object page blocks.
 * 
 * Default value is <code>Collapsed</code>.
 * @returns {sap.uxap.ObjectPageSubSectionMode} Value of property <code>mode</code>
 * @public
 * 
 */
sap.uxap.ObjectPageSubSection.prototype.getMode = function() { return new sap.uxap.ObjectPageSubSectionMode(); };

/**
 * Gets content of aggregation <code>moreBlocks</code>.
 * 
 * Additional controls to display when the Show more / See all / (...) button is pressed
 * @returns {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.uxap.ObjectPageSubSection.prototype.getMoreBlocks = function() { return new Array(); };

/**
 * Gets current value of property <code>titleUppercase</code>.
 * 
 * Determines whether the Subsection title is displayed in upper case.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>titleUppercase</code>
 * @public
 * 
 */
sap.uxap.ObjectPageSubSection.prototype.getTitleUppercase = function() { return false; };

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>actions</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *           oAction The action whose index is looked for.
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.uxap.ObjectPageSubSection.prototype.indexOfAction = function(oAction) { return 0; };

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>blocks</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *           oBlock The block whose index is looked for.
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.uxap.ObjectPageSubSection.prototype.indexOfBlock = function(oBlock) { return 0; };

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>moreBlocks</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *           oMoreBlock The moreBlock whose index is looked for.
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.uxap.ObjectPageSubSection.prototype.indexOfMoreBlock = function(oMoreBlock) { return 0; };

/**
 * Inserts a action into the aggregation named <code>actions</code>.
 * @param {sap.ui.core.Control}
 *            oAction the action to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the action should be inserted at; for
 *              a negative value of <code>iIndex</code>, the action is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the action is inserted at
 *              the last position
 * @returns {sap.uxap.ObjectPageSubSection} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.uxap.ObjectPageSubSection.prototype.insertAction = function(oAction,iIndex) { return new sap.uxap.ObjectPageSubSection(); };

/**
 * Inserts a block into the aggregation named <code>blocks</code>.
 * @param {sap.ui.core.Control}
 *            oBlock the block to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the block should be inserted at; for
 *              a negative value of <code>iIndex</code>, the block is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the block is inserted at
 *              the last position
 * @returns {sap.uxap.ObjectPageSubSection} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.uxap.ObjectPageSubSection.prototype.insertBlock = function(oBlock,iIndex) { return new sap.uxap.ObjectPageSubSection(); };

/**
 * Inserts a moreBlock into the aggregation named <code>moreBlocks</code>.
 * @param {sap.ui.core.Control}
 *            oMoreBlock the moreBlock to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the moreBlock should be inserted at; for
 *              a negative value of <code>iIndex</code>, the moreBlock is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the moreBlock is inserted at
 *              the last position
 * @returns {sap.uxap.ObjectPageSubSection} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.uxap.ObjectPageSubSection.prototype.insertMoreBlock = function(oMoreBlock,iIndex) { return new sap.uxap.ObjectPageSubSection(); };

/**
 * Removes a action from the aggregation named <code>actions</code>.
 * @param {int | string | sap.ui.core.Control} vAction The actionto remove or its index or id
 * @returns {sap.ui.core.Control} The removed action or <code>null</code>
 * @public
 * 
 */
sap.uxap.ObjectPageSubSection.prototype.removeAction = function(vAction) { return new sap.ui.core.Control(); };

/**
 * Removes all the controls in the aggregation named <code>actions</code>.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.core.Control[]} An array of the removed elements (might be empty)
 * @public
 * 
 */
sap.uxap.ObjectPageSubSection.prototype.removeAllActions = function() { return new Array(); };

/**
 * Removes all the controls in the aggregation named <code>blocks</code>.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.core.Control[]} An array of the removed elements (might be empty)
 * @public
 * 
 */
sap.uxap.ObjectPageSubSection.prototype.removeAllBlocks = function() { return new Array(); };

/**
 * Removes all the controls in the aggregation named <code>moreBlocks</code>.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.core.Control[]} An array of the removed elements (might be empty)
 * @public
 * 
 */
sap.uxap.ObjectPageSubSection.prototype.removeAllMoreBlocks = function() { return new Array(); };

/**
 * Removes a block from the aggregation named <code>blocks</code>.
 * @param {int | string | sap.ui.core.Control} vBlock The blockto remove or its index or id
 * @returns {sap.ui.core.Control} The removed block or <code>null</code>
 * @public
 * 
 */
sap.uxap.ObjectPageSubSection.prototype.removeBlock = function(vBlock) { return new sap.ui.core.Control(); };

/**
 * Removes a moreBlock from the aggregation named <code>moreBlocks</code>.
 * @param {int | string | sap.ui.core.Control} vMoreBlock The moreBlockto remove or its index or id
 * @returns {sap.ui.core.Control} The removed moreBlock or <code>null</code>
 * @public
 * 
 */
sap.uxap.ObjectPageSubSection.prototype.removeMoreBlock = function(vMoreBlock) { return new sap.ui.core.Control(); };

/**
 * Sets a new value for property <code>mode</code>.
 * 
 * A mode property that will be passed to the controls in the blocks and moreBlocks aggregations. Only relevant if these aggregations use Object page blocks.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Collapsed</code>.
 * @param {sap.uxap.ObjectPageSubSectionMode} sMode New value for property <code>mode</code>
 * @returns {sap.uxap.ObjectPageSubSection} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.uxap.ObjectPageSubSection.prototype.setMode = function(sMode) { return new sap.uxap.ObjectPageSubSection(); };

/**
 * Sets a new value for property <code>titleUppercase</code>.
 * 
 * Determines whether the Subsection title is displayed in upper case.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bTitleUppercase New value for property <code>titleUppercase</code>
 * @returns {sap.uxap.ObjectPageSubSection} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.uxap.ObjectPageSubSection.prototype.setTitleUppercase = function(bTitleUppercase) { return new sap.uxap.ObjectPageSubSection(); };


// ---- sap.uxap.ObjectPageSubSectionLayout --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.uxap.ObjectPageSubSectionLayout.toString = function() { return ""; };

// ---- sap.uxap.ObjectPageSubSectionMode --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.uxap.ObjectPageSubSectionMode.toString = function() { return ""; };
// ---- static fields of namespaces ---------------------------------------------------------------------

// ---- sap.uxap.Importance --------------------------------------------------------------------------

sap.uxap.Importance.High = "";

sap.uxap.Importance.Low = "";

sap.uxap.Importance.Medium = "";


// ---- sap.uxap.ObjectPageConfigurationMode --------------------------------------------------------------------------

/**
 * @public
 * 
 */
sap.uxap.ObjectPageConfigurationMode.JsonModel = "";

/**
 * @public
 * 
 */
sap.uxap.ObjectPageConfigurationMode.JsonURL = "";


// ---- sap.uxap.ObjectPageHeaderDesign --------------------------------------------------------------------------

/**
 * Dark theme for the ObjectPageHeader.
 * @public
 * 
 */
sap.uxap.ObjectPageHeaderDesign.Dark = "";

/**
 * Light theme for the ObjectPageHeader.
 * @public
 * 
 */
sap.uxap.ObjectPageHeaderDesign.Light = "";


// ---- sap.uxap.ObjectPageHeaderPictureShape --------------------------------------------------------------------------

/**
 * Circle shape for the images in the ObjectPageHeader.
 * @public
 * 
 */
sap.uxap.ObjectPageHeaderPictureShape.Circle = "";

/**
 * Square shape for the images in the ObjectPageHeader.
 * @public
 * 
 */
sap.uxap.ObjectPageHeaderPictureShape.Square = "";


// ---- sap.uxap.ObjectPageSubSectionLayout --------------------------------------------------------------------------

/**
 * TitleOnLeft: title and actions on the left, inside the block area.
 * @public
 * 
 */
sap.uxap.ObjectPageSubSectionLayout.TitleOnLeft = "";

/**
 * TitleOnTop: title and actions on top of the block area.
 * @public
 * 
 */
sap.uxap.ObjectPageSubSectionLayout.TitleOnTop = "";


// ---- sap.uxap.ObjectPageSubSectionMode --------------------------------------------------------------------------

/**
 * Collapsed mode of display of the ObjectPageLayout.
 * @public
 * 
 */
sap.uxap.ObjectPageSubSectionMode.Collapsed = "";

/**
 * Expanded mode of displaying the ObjectPageLayout.
 * @public
 * 
 */
sap.uxap.ObjectPageSubSectionMode.Expanded = "";


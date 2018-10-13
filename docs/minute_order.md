# DCFS Minute Order variables

* `visitor` (ID)
	* e.g. ID for mother/father
* `monitored` (bool)
* `liberalization_discretion` (bool)
* `visits`
	* `quantity` (int)
	* `unit` (enum)
		* "week" or "month"
	* `requirement` (enum)
		* "minimum", "maximum", or "min/max"
* `hours`
	* `quantity` (int)
	* `unit` (enum)
		* "week" or "month"
	* `requirement` (enum)
		* "minimum", "maximum", or "min/max"
* `active` (bool)
	* inactive if incarcerated or otherwise unavailable
* `restrictions` (string)
	* misc restrictions written in plain text

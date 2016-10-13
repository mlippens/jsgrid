(function(jsGrid) {

	    jsGrid.locales.nl = {
        grid: {
            noDataContent: "Geen data beschikbaar",
            deleteConfirm: "Bent u zeker ?",
            pagerFormat: "Pagina's: {first} {prev} {pages} {next} {last} &nbsp;&nbsp; {pageIndex} van {pageCount}",
            pagePrevText: "<",
            pageNextText: ">",
            pageFirstText: "<<",
            pageLastText: ">>",
            loadMessage: "Bezig met laden...",
            invalidMessage: "Er zijn ongeldige gegevens ingevoerd!"
        },

        loadIndicator: {
            message: "Bezig met laden..."
        },

        fields: {
            control: {
                searchModeButtonTooltip: "Schakel over naar zoeken",
                insertModeButtonTooltip: "Schakel over naar toevoegen",
                editButtonTooltip: "Wijzigen",
                deleteButtonTooltip: "Verwijderen",
                searchButtonTooltip: "Zoeken",
                clearFilterButtonTooltip: "Filter verwijderen",
                insertButtonTooltip: "Toevoegen",
                updateButtonTooltip: "Opslaan",
                cancelEditButtonTooltip: "Annuleren"
            }
        },

        validators: {
            required: { message: "Veld is verplicht" },
            rangeLength: { message: "De lengte van de veld waarde valt buiten het opgegeven interval" },
            minLength: { message: "De waarde van het veld is te kort" },
            maxLength: { message: "De waarde van het veld is te lang" },
            pattern: { message: "De waarde van het veld komt niet overeen met het gedefinieerde patroon" },
            range: { message: "De waarde van het veld valt buiten het opgegeven interval" },
            min: { message: "De waarde van het veld is te klein" },
            max: { message: "De waarde van het veld is te groot" }
        }
    };

}(jsGrid, jQuery));

